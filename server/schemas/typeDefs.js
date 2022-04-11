// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

type Auth {
  token: ID!
  user: User
}

type User {
  _id: ID
  username: String
  email: String
  savedCollages: [Collage]
  savedDesigns: [Design]
  savedLogos: [Logo]
  userImages: [InspirationalImage]
  userComponents: [Component]
}

type Collage {
  _id: ID
  collageName: String
  collageLayout: Layout
  roundedCorners: Boolean
  circularPhotos: Boolean
  padding: Boolean 
  paddingThickness: Number
  border: Boolean
  borderThickness: Number
  borderColor: String
  shadow: Boolean
  shadowColor: String
  shadowOpacity: String
  captions: Boolean
  captionText: [String]
  title: Boolean
  font: String
  backgroundColor: String
  images: [InspirationalImage]
  imagePositions: [Number]
  titleText: String
}

type Color {
  _id: ID
  name: String
  hex: String
  rgb: String
  user_id: ID
}

type Component {
  _id: ID
  componentName: String
  componentType: ComponentType
  style: Style
  material: [Material]
  stoneType: [Stone]
  countryOfOrigin: Country
  shape: Shape
  size: String
  weight: String
  price: Number
  quantity: Number
  maxPrice: Number
  maxQuantity: Number
  freeShipping: Boolean
  shippingPrice: Number
  shippingTime: String
  colors: [Color]
  link: String
  photoLink: String
  etsyItemName: String
  shopName: String
  soldOut: Boolean
  bestSeller: Boolean
  likeRating: Number
}

type ComponentType {
  componentType: String
  user_id: ID
}

type Country {
  countryName: String
  user_id: ID
}

type Design {
  _id: ID
  designName: String
  components: [Component]
  jewelryType: JewelryType
  likeRating: Number
  colors: [Color]
  style: Style
}

type inspirationalImage {
  _id: ID
  name: String
  imageLink: String
  style: Style
  artist: String
  accountName: String
  Type: JewelryType
  price: Number
  likeRating: Number
  colors: [Color]
  user: User
  etsyShop: Shop
  createdAt: Date
}

type JewelryType{
  jewelryType: String
  user_id: ID
}

type Layout{
  name: String
  user_id: ID
  cell1: Number
  cell2: Number
  cell3: Number
  cell4: Number
  cell5: Number
  cell6: Number
  cell7: Number
  cell8: Number
  cell9: Number
  cell10: Number
  cell11: Number
  cell12: Number
  cell13: Number
  cell14: Number
  cell15: Number
  cell16: Number
  cell17: Number
  cell18: Number
  cell19: Number
  cell20: Number
  cell21: Number
  cell22: Number
  cell23: Number
  cell24: Number
  cell25: Number
  cell26: Number
  cell27: Number
  cell28: Number
  cell29: Number
  cell30: Number
  cell31: Number
  cell32: Number
  cell33: Number
  cell34: Number
  cell35: Number
  cell36: Number
}

type Logo {
  _id: ID
  logoName: String
  link: String
  colors: [Colors]
}

type Material {
  type: String
  pricePerOunce: Number
  user_id: ID
}

type Shape{
  type: String
  user_id: ID
}

type Shop{
  _id: ID
  shopName: String
  ownerName: String
  shopRating: Number
  link: String
  numberOfSales: Number
  updatedAt: Date
}

type Stone{
  type: String
  pricePerOunce: Number
  user_id: ID
}

type Style{
  _id: ID
  type: String
  background: String
  styleElements: String
  timePeriod: String
  notes: String
  user_id: ID
}

input CollageInput {
  _id: ID!
  collageName: String!
  collageLayout: Layout!
  roundedCorners: Boolean
  circularPhotos: Boolean
  padding: Boolean
  paddingThickness: Number
  border: Boolean
  borderThickness: Number
  borderColor: String
  shadow: Boolean
  shadowColor: String
  shadowOpacity: String
  captions: Boolean
  captionsText: [String]
  title: Boolean
  font: String
  backgroundColor: String
  images: [InspirationalImage]!
  imagepositions [Number]!
  titleText: String
}

input ComponentInput {
  componentName: String!
  componentType: ComponentType!
  style: Style!
  material: Material
  stoneType: Stone
  countryOfOrigin: Country
  shape: Shape
  size: String
  weight: String
  price: Number!
  quantity: Number
  maxPrice: Number
  maxQuantity: Number
  freeShipping: Boolean
  shippingPrice: Number
  shippingTime: String
  colors: [Color]
  link: String!
  photoLink: String!
  etsyItemName: String
  shopName: String
  soldOut: Boolean
  bestSeller: Boolean
  likeRating: Number!
}

input DesignInput {
  designName: String!
  components: [Components]!
  jewelryType: JewelryType
  likeRating: Number!
  colors: [Color],
  style: Style
}

input InspirationalImageInput {
  name: String!
  imageLink: String!
  style: Style
  artist: String
  accountName: String
  type: JewelryType!
  price: Number
  likeRating: Number!
  colors: [Color]
  user: ID
  etsyShop: Shop
  createdAt: Date
}

input LayoutInput {
  name: String!
  user_id: ID!
  cell1: Number!
  cell2: Number!
  cell3: Number!
  cell4: Number!
  cell5: Number!
  cell6: Number!
  cell7: Number!
  cell8: Number!
  cell9: Number!
  cell10: Number!
  cell11: Number!
  cell12: Number!
  cell13: Number!
  cell14: Number!
  cell15: Number!
  cell16: Number!
  cell17: Number!
  cell18: Number!
  cell19: Number!
  cell20: Number!
  cell21: Number!
  cell22: Number!
  cell23: Number!
  cell24: Number!
  cell25: Number!
  cell26: Number!
  cell27: Number!
  cell28: Number!
  cell29: Number!
  cell30: Number!
  cell31: Number!
  cell32: Number!
  cell33: Number!
  cell34: Number!
  cell35: Number!
  cell36: Number!
}

input LogoInput {
  logoName: String!
  link: String!
  colors: [Color]
}

input ShopInput {
  shopName: String!
  ownerName: String
  shopRating: Number
  link: String
  numberOfSales: Number
  updatedAt: Date
}

input StyleInput {
  type: String!
  background: String
  styleElements: String
  timePeriod: String
  notes: String
  user_id: ID!
}

  type Query {
    me: User
    getCollage(_id: ID!): Collage
    getColors(userId: ID!): [Color]
    getColorById(_id: ID!): Color
    getComponentById(_id: ID!): Component
    getComponents: [Component]
    getComponentTypes(userId: ID!): [ComponentType]
    getCountryNames(userId: ID!): [Country]
    getDesignById(_id: ID!): Design
    getDesigns: [Designs]
    getImages: [InspirationalImage]
    getImageById(_id: ID!): InspirationalImage
    getJewelryTypes(userId: ID!): [JewelryType]
    getLayouts(userId: ID!): [Layout]
    getLogos: [Logo]
    getLogoById(_id: ID!): Logo
    getMaterials(userId: ID!): [Material]
    getShapes(userId: ID!): [Shape]
    getShops: [Shop]
    getShopById(_id: ID!): Shop
    getStones(userId: ID!): [Stone]
    getStyles(userId: ID!): [Style]
    getStyleById(_id: ID!): Style
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    AddCollage(input: CollageInput): Collage
    AddColor(name: String!, hex: String!, rgb: String, user_id: ID!): Color
    AddComponent(input: ComponentInput): Component
    AddComponentType(componentType: String!, user_id: ID!): ComponentType
    AddCountryName(countryName: String!, user_id: ID!): Country
    AddDesign(input: DesignInput): Design
    AddImage(input: InspirationalImageInput): InspirationalImage
    AddJewelryType(jewelryType: String!, user_id: ID!): JewelryType
    AddLayout(input: LayoutInput): Layout
    UpdateLayout(input: LayoutInput): Layout
    AddLogo(input: Logo): Logo
    AddMaterial(type: String!, pricePerOunce: Number, user_id: ID!): Material
    AddShape(type: String!, user_id: ID!): Shape
    AddShop(input: ShopInput): Shop
    AddStone(type: String!, pricePerOunce: Number, user_id: ID!): Stone
    AddStyle(input: StyleInput): Style
    UpdateShop(input: ShopInput): Shop
  }
`;

// export the typeDefs
module.exports = typeDefs;