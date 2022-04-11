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
      getcountryNames: async (parent, args, context) => {
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
      getImagesById: async (parent, args, context) => {
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
      AddCollage: async (parent, args) => {

      },
      AddColor: async (parent, args) => {

      },
      AddComponent: async (parent, args) => {

      },
      AddComponentType: async (parent, args) => {

      },
      AddCountryName: async (parent, args) => {

      },
      AddDesign: async (parent, args) => {

      },
      AddImage: async (parent, args) => {

      },
      AddJewelryType: async (parent, args) => {

      },
      AddLayout: async (parent, args) => {

      },
      AddCollage: async (parent, args) => {

      },
      UpdateLayout: async (parent, args) => {

      },
      AddLogo: async (parent, args) => {

      },
      AddMaterial: async (parent, args) => {

      },
      AddShape: async (parent, args) => {

      },
      AddShop: async (parent, args) => {

      },
      AddStone: async (parent, args) => {

      },
      AddStyle: async (parent, args) => {

      },
      UpdateShop: async (parent, args) => {

      }
    }
  };
  
  module.exports = resolvers;