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
}

type Country {
  countryName: String
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
}

type Layout{
  name: String
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
}

type Shape{
  type: String
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
}

type Style{
  _id: ID
  type: String
  background: String
  styleElements: String
  timePeriod: String
  notes: String
}

input CollageInput {
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
}

  type Query {
    me: User
    getCollage: Collage
    getColors: [Color]
    getColorById: Color
    getComponentById: Component
    getComponents: [Component]
    getComponentTypes: [ComponentType]
    getCountryNames: [Country]
    getDesignById: Design
    getDesigns: [Designs]
    getImages: [InspirationalImage]
    getImageById: InspirationalImage
    getJewelryTypes: [JewelryType]
    getLayouts: [Layout]
    getLogos: [Logo]
    getLogoById: Logo
    getMaterials: [Material]
    getShapes: [Shape]
    getShops: [Shop]
    getShopById: Shop
    getStones: [Stone]
    getStyles: [Style]
    getStyleById: Style
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    AddCollage(input: CollageInput): Collage
    AddColor(name: String!, hex: String!, rgb: String): Color
    AddComponent(input: ComponentInput): Component
    AddComponentType(componentType: String!): ComponentType
    AddCountryName(countryName: String!): Country
    AddDesign(input: DesignInput): Design
    AddImage(input: InspirationalImageInput): InspirationalImage
    AddJewelryType(jewelryType: String!): JewelryType
    AddLayout(input: LayoutInput): Layout
    UpdateLayout(input: LayoutInput): Layout
    AddLogo(input: Logo): Logo
    AddMaterial(type: String!, pricePerOunce: Number): Material
    AddShape(type: String!): Shape
    AddShop(input: ShopInput): Shop
    AddStone(type: String!, pricePerOunce: Number): Stone
    AddStyle(input: StyleInput): Style
    updateShop(input: ShopInput): Shop
  }
`;

// export the typeDefs
module.exports = typeDefs;