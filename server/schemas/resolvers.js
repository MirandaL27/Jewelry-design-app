const { User } = require('../models');
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

      },
      getColors: async (parent, args, context) => {

      },
      getColorById: async (parent, args, context) => {

      },
      getComponentById: async (parent, args, context) => {

      },
      getComponents: async (parent, args, context) => {

      },
      getComponentTypes: async (parent, args, context) => {

      },
      getcountryNames: async (parent, args, context) => {

      },
      getDesignById : async (parent, args, context) => {

      },
      getDesigns: async (parent, args, context) => {
        
      },
      getImages: async (parent, args, context) => {

      },
      getImagesById: async (parent, args, context) => {

      },
      getJewelryTypes: async (parent, args, context) => {

      },
      getLayouts: async (parent, args, context) => {

      },
      getLogos: async (parent, args, context) => {

      },
      getLogoById: async (parent, args, context) => {

      },
      getMaterials: async (parent, args, context) => {

      },
      getShapes: async (parent, args, context) => {

      },
      getShops: async (parent, args, context) => {

      },
      getShopById: async (parent, args, context) => {

      },
      getStones: async (parent, args, context) => {

      },
      getStyles: async (parent, args, context) => {

      },
      getStyleById: async (parent, args, context) => {

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