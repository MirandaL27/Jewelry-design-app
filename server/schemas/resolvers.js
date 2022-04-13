const { User, Collage, Color, Component, ComponentType, Country, Design, InspirationalImage, JewelryType, Layout, Logo, Material, Shape, Shop, Stone, Style } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')
      
          return userData;
        }
        throw new AuthenticationError('Not logged in');
      },
      getCollage: async (parent, args, context) => {
        try{
          const collageData = await Collage.findOne({_id: args._id});
          return collageData;
        }
        catch(e){
          console.log(e);
        }
      },
      getColors: async (parent, args, context) => {
        try{
          const colorData = await Color.find({userId: { $in: [context.user._id, null] }});
          return colorData;
        }
        catch(e){
          console.log(e);
        }
      },
      getColorById: async (parent, args, context) => {
        try{
          const colorData = await Color.findOne({_id: args._id});
        return colorData;
        }
        catch(e){
          console.log(e);
        }
      },
      getComponentById: async (parent, args, context) => {
        try{
          const componentData = await Component.findOne({_id: args_id});
          return componentData;
        }
        catch(e){
          console.log(e);
        }
      },
      getComponents: async (parent, args, context) => {
        try{
          const componentData = await Component.find({});
          return componentData;
        }
        catch(e){
          console.log(e);
        }
      },
      getComponentTypes: async (parent, args, context) => {
        try{
          const compTypeData = await ComponentType.find({userId: { $in: [context.user._id, null] }});
          return compTypeData;
        }
        catch(e){
          console.log(e);
        }
      },
      getCountryNames: async (parent, args, context) => {
        try{
          const namesData = await Country.find({userId: { $in: [context.user._id, null] }});
          return namesData;
        }
        catch(e){
          console.log(e);
        }
      },
      getDesignById : async (parent, args, context) => {
        try{
          const designData = await Design.findOne({_id: args_id});
          return designData;
        }
        catch(e){
          console.log(e);
        }
      },
      getDesigns: async (parent, args, context) => {
        try{
          const design = await Design.find({});
          return design;
        }
        catch(e){
          console.log(e);
        }
      },
      getImages: async (parent, args, context) => {
        try{
          const imageData = await InspirationalImage.find({});
          return imageData;
        }
        catch(e){
          console.log(e);
        }
      },
      getImageById: async (parent, args, context) => {
        try{
          const imageData = await InspirationalImage.findOne({_id: args_id});
          return imageData;
        }
        catch(e){
          console.log(e);
        }
      },
      getJewelryTypes: async (parent, args, context) => {
        try{
          const jewelryTypeData = await JewelryType.find({userId: { $in: [context.user._id, null] }});
          return jewelryTypeData;
        }
        catch(e){
          console.log(e);
        }
      },
      getLayouts: async (parent, args, context) => {
        try{
          const layoutData = await Layout.find({userId: { $in: [context.user._id, null] }});
          return layoutData;
        }
        catch(e){
          console.log(e);
        }
      },
      getLogos: async (parent, args, context) => {
        try{
          const logoData = await Logo.find({});
          return logoData;
        }
        catch(e){
          console.log(e);
        }
      },
      getLogoById: async (parent, args, context) => {
        try{
          const logoData = await Logo.findOne({_id: args_id});
          return logoData;
        }
        catch(e){
          console.log(e);
        }
      },
      getMaterials: async (parent, args, context) => {
        try{
          const materialData = await Material.find({userId: { $in: [context.user._id, null] }});
          return materialData;
        }
        catch(e){
          console.log(e);
        }
      },
      getShapes: async (parent, args, context) => {
        try{
          const shapeData = await Shape.find({userId: { $in: [context.user._id, null] }});
          return shapeData;
        }
        catch(e){
          console.log(e);
        }
      },
      getShops: async (parent, args, context) => {
        try{
          const shopData = await Shop.find({});
          return shopData;
        }
        catch(e){
          console.log(e);
        }
      },
      getShopById: async (parent, args, context) => {
        try{
          const shopData = await Shop.findOne({_id: args._id});
          return shopData;
        }
        catch(e){
          console.log(e);
        }
      },
      getStones: async (parent, args, context) => {
        try{
          const stoneData = await Stone.find({userId: { $in: [context.user._id, null] }});
          return stoneData;
        }
        catch(e){
          console.log(e);
        }
      },
      getStyles: async (parent, args, context) => {
        try{
          const styleData = await Style.find({userId: { $in: [context.user._id, null] }});
          return styleData;
        }
        catch(e){
          console.log(e);
        }
      },
      getStyleById: async (parent, args, context) => {
        try{
          const styleData = await Style.findOne({_id: args._id});
          return styleData;
        }
        catch(e){
          console.log(e);
        }
      }
    },
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
      
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
      
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
      
        const correctPw = await user.isCorrectPassword(password);
      
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
      
        const token = signToken(user);
        return { token, user };
      },
      AddCollage: async (parent, {input}, context) => {
        if(context.user){
          const collage = await Collage.create(input);
          //need to update the user collage array
          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $addToSet: { savedCollages: collage._id } },
            { new: true, runValidators: true }
          )
            .populate({
              path: 'savedCollages',
              select: '-__v'
            })
  
          console.log(updatedUser);
  
          return updatedUser;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      UpdateCollage: async ( parent, {id, input}, context) => {
        if(context.user){
          const collageData = await Collage.findByIdAndUpdate(id, input, { new: true, runValidators: true });
          return collageData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      AddColor: async (parent, {input}, context) => {
        if(context.user){
          const color = await Color.create(input);
          return color;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      UpdateColor: async ( parent, {id, input}, context) => {
        if(context.user){
          const colorData = await Color.findByIdAndUpdate(id, input, { new: true, runValidators: true });
          return colorData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      AddComponent: async (parent, {input}, context) => {
        if(context.user){
          const component = await Component.create(input);
          //need to update the user component array
          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $addToSet: { userComponents: component._id } },
            { new: true, runValidators: true }
          )
            .populate({
              path: 'userComponents',
              select: '-__v'
            })
  
          console.log(updatedUser);
  
          return updatedUser;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      UpdateComponent: async ( parent, {id, input}, context) => {
        if(context.user){
          const componentData = await Component.findByIdAndUpdate(id, input, { new: true, runValidators: true });
          return componentData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      AddComponentType: async (parent, {input}, context) => {
        if(context.user){
          const compTypeData = await ComponentType.create(input);
          return compTypeData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      UpdateComponentType: async ( parent, {id, input}, context) => {
        if(context.user){
          const compTypeData = await ComponentType.findByIdAndUpdate(id, input, { new: true, runValidators: true });
          return compTypeData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      AddCountryName: async (parent, {input}, context) => {
        if(context.user){
          const countryName = await Country.create(input);
          return countryName;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      UpdateCountryName: async ( parent, {id, input}, context) => {
        if(context.user){
          const countryData = await Country.findByIdAndUpdate(id, input, { new: true, runValidators: true });
          return countryData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      AddDesign: async (parent, {input}, context) => {
        if(context.user){
          const design = await Design.create(input);
          //need to update the user design array
          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $addToSet: { savedDesigns: design._id } },
            { new: true, runValidators: true }
          )
            .populate({
              path: 'savedDesigns',
              select: '-__v'
            })
  
          console.log(updatedUser);
  
          return updatedUser;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      UpdateDesign: async ( parent, {id, input}, context) => {
        if(context.user){
          const designData = await Design.findByIdAndUpdate(id, input, { new: true, runValidators: true });
          return designData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      AddImage: async (parent, {input}, context) => {
        if(context.user){
          const image = await InspirationalImage.create(input);
          //need to update the user savedImages array
          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $addToSet: { userImages: image._id } },
            { new: true, runValidators: true }
          )
            .populate({
              path: 'userImages',
              select: '-__v'
            })
  
          console.log(updatedUser);
  
          return updatedUser;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      UpdateImage: async ( parent, {id, input}, context) => {
        if(context.user){
          const imageData = await InspirationalImage.findByIdAndUpdate(id, input, { new: true, runValidators: true });
          return imageData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      AddJewelryType: async (parent, {input}, context) => {
        if(context.user){
          const jewelryTypeData = await JewelryType.create(input);
          return jewelryTypeData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      UpdateJewelryType: async ( parent, {id, input}, context) => {
        if(context.user){
          const jewelryTypeData = await JewelryType.findByIdAndUpdate(id, input, { new: true, runValidators: true });
          return jewelryTypeData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      AddLayout: async (parent, {input}, context) => {
        if(context.user){
          const layoutData = await Layout.create({input});
          return layoutData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      UpdateLayout: async (parent, {id, input}, context) => {
        if(context.user){
          const layoutData = await Layout.findByIdAndUpdate(id, input, { new: true, runValidators: true });
          return layoutData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      AddLogo: async (parent, {input}, context) => {
        if(context.user){
          const logoData = await Logo.create(input);
          //need to update the user Logos array
          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $addToSet: { savedLogos: logoData._id } },
            { new: true, runValidators: true }
          )
            .populate({
              path: 'savedLogos',
              select: '-__v'
            })
  
          console.log(updatedUser);
  
          return updatedUser;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      UpdateLogo: async ( parent, {id, input}, context) => {
        if(context.user){
          const logoData = await Logo.findByIdAndUpdate(id, input, { new: true, runValidators: true });
          return logoData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      AddMaterial: async (parent, {input}, context) => {
        if(context.user){
          const materialData = await Material.create(input);
          return materialData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      UpdateMaterial: async ( parent, {id, input}, context) => {
        if(context.user){
          const materialData = await Material.findByIdAndUpdate(id, input, { new: true, runValidators: true });
          return materialData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      AddShape: async (parent, {input}, context) => {
        if(context.user){
          const shapeData = await Shape.create(input);
          return shapeData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      UpdateShape: async ( parent, {id, input}, context) => {
        if(context.user){
          const shapeData = await Shape.findByIdAndUpdate(id, input, { new: true, runValidators: true });
          return shapeData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      AddShop: async (parent, {input}, context) => {
        if(context.user){
          const shopData = await Shop.create(input);
          return shopData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      UpdateShop: async (parent, {id, input}, context) => {
        if(context.user){
          const shopData = await Shop.findByIdAndUpdate(id, input, { new: true, runValidators: true });
          return shopData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      AddStone: async (parent, {input}, context) => {
        if(context.user){
          const stoneData = await Stone.create(input);
          return stoneData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      UpdateStone: async (parent, {id, input}, context) => {
        if(context.user){
          const stoneData = await Stone.findByIdAndUpdate(id, input, { new: true, runValidators: true });
          return stoneData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      AddStyle: async (parent, {input}, context) => {
        if(context.user){
          const styleData = await Style.create(input);
          return styleData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      UpdateStyle: async ( parent, {id, input}, context) => {
        if(context.user){
          const styleData = await Style.findByIdAndUpdate(id, input, { new: true, runValidators: true });
          return styleData;
        }
        throw new AuthenticationError('You need to be logged in!');
      }
    }
  };
  
  module.exports = resolvers;