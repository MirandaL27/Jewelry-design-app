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
  paddingThickness: Int
  border: Boolean
  borderThickness: Int
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
  imagePositions: [Int]
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
  price: Float
  quantity: Int
  maxPrice: Float
  maxQuantity: Int
  freeShipping: Boolean
  shippingPrice: Float
  shippingTime: String
  colors: [Color]
  link: String
  photoLink: String
  etsyItemName: String
  shopName: String
  soldOut: Boolean
  bestSeller: Boolean
  likeRating: Int
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
  likeRating: Int
  colors: [Color]
  style: Style
}

type InspirationalImage {
  _id: ID
  name: String
  imageLink: String
  style: Style
  artist: String
  accountName: String
  Type: JewelryType
  price: Float
  likeRating: Int
  colors: [Color]
  user: User
  etsyShop: Shop
  createdAt: String
  sold: Boolean
  bestSeller: Boolean
}

type JewelryType{
  jewelryType: String
  user_id: ID
}

type Layout{
  name: String
  user_id: ID
  cell1: Int
  cell2: Int
  cell3: Int
  cell4: Int
  cell5: Int
  cell6: Int
  cell7: Int
  cell8: Int
  cell9: Int
  cell10: Int
  cell11: Int
  cell12: Int
  cell13: Int
  cell14: Int
  cell15: Int
  cell16: Int
  cell17: Int
  cell18: Int
  cell19: Int
  cell20: Int
  cell21: Int
  cell22: Int
  cell23: Int
  cell24: Int
  cell25: Int
  cell26: Int
  cell27: Int
  cell28: Int
  cell29: Int
  cell30: Int
  cell31: Int
  cell32: Int
  cell33: Int
  cell34: Int
  cell35: Int
  cell36: Int
}

type Logo {
  _id: ID
  logoName: String
  link: String
  colors: [Color]
}

type Material {
  type: String
  pricePerOunce: String
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
  shopRating: Float
  link: String
  numberOfSales: Int
  updatedAt: String
}

type Stone{
  type: String
  pricePerCarat: String
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
  collageLayout: LayoutInput!
  roundedCorners: Boolean
  circularPhotos: Boolean
  padding: Boolean
  paddingThickness: Int
  border: Boolean
  borderThickness: Int
  borderColor: String
  shadow: Boolean
  shadowColor: String
  shadowOpacity: String
  captions: Boolean
  captionsText: [String]
  title: Boolean
  font: String
  backgroundColor: String
  images: [InspirationalImageInput]!
  imagePositions: [Int]!
  titleText: String
}

input ColorInput {
  name: String!
  hex: String!
  rgb: String
  user_id: ID!
}

input ComponentInput {
  componentName: String!
  componentType: ComponentTypeInput!
  style: StyleInput!
  material: MaterialInput
  stoneType: StoneInput
  countryOfOrigin: CountryInput
  shape: ShapeInput
  size: String
  weight: String
  price: Float!
  quantity: Int
  maxPrice: Float
  maxQuantity: Int
  freeShipping: Boolean
  shippingPrice: Float
  shippingTime: String
  colors: [ColorInput]
  link: String!
  photoLink: String!
  etsyItemName: String
  shopName: String
  soldOut: Boolean
  bestSeller: Boolean
  likeRating: Int!
}

input ComponentTypeInput {
  componentType: String!
  user_id: ID!
}

input CountryInput {
  countryName: String!
  user_id: ID!
}

input DesignInput {
  designName: String!
  components: [ComponentInput]!
  jewelryType: JewelryTypeInput
  likeRating: Int!
  colors: [ColorInput],
  style: StyleInput
}

input InspirationalImageInput {
  name: String!
  imageLink: String!
  style: StyleInput
  artist: String
  accountName: String
  type: JewelryTypeInput!
  price: Float
  likeRating: Int!
  colors: [ColorInput]
  user: ID
  etsyShop: ShopInput
  createdAt: String
  sold: Boolean
  bestSeller: Boolean
}

input JewelryTypeInput{
  jewelryType: String!
  user_id: ID!
}

input LayoutInput {
  name: String!
  user_id: ID!
  cell1: Int!
  cell2: Int!
  cell3: Int!
  cell4: Int!
  cell5: Int!
  cell6: Int!
  cell7: Int!
  cell8: Int!
  cell9: Int!
  cell10: Int!
  cell11: Int!
  cell12: Int!
  cell13: Int!
  cell14: Int!
  cell15: Int!
  cell16: Int!
  cell17: Int!
  cell18: Int!
  cell19: Int!
  cell20: Int!
  cell21: Int!
  cell22: Int!
  cell23: Int!
  cell24: Int!
  cell25: Int!
  cell26: Int!
  cell27: Int!
  cell28: Int!
  cell29: Int!
  cell30: Int!
  cell31: Int!
  cell32: Int!
  cell33: Int!
  cell34: Int!
  cell35: Int!
  cell36: Int!
}

input LogoInput {
  logoName: String!
  link: String!
  colors: [ColorInput]
}

input MaterialInput {
  type: String!
  pricePerOunce: String
  user_id: ID!
}

input ShapeInput{
  type: String!
  user_id: ID!
}

input ShopInput {
  shopName: String!
  ownerName: String
  shopRating: Float
  link: String
  numberOfSales: Int
  updatedAt: String
}

input StoneInput{
  type: String!
  pricePerCarat: String
  user_id: ID!
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
  getDesigns: [Design]
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
    UpdateCollage(id: ID!, input: CollageInput): Collage
    AddColor(input: ColorInput): Color
    UpdateColor(id: ID!, input: ColorInput): Color
    AddComponent(input: ComponentInput): Component
    UpdateComponent(id: ID!, input: ComponentInput): Component
    AddComponentType(input: ComponentTypeInput): ComponentType
    UpdateComponentType(id: ID!, input: ComponentTypeInput): ComponentType
    AddCountryName(input: CountryInput): Country
    UpdateCountryName(id: ID!, input: CountryInput): Country
    AddDesign(input: DesignInput): Design
    UpdateDesign(id: ID!, input: DesignInput): Design
    AddImage(input: InspirationalImageInput): InspirationalImage
    UpdateImage(id: ID!, input: InspirationalImageInput): InspirationalImage
    AddJewelryType(input: JewelryTypeInput): JewelryType
    UpdateJewelryType(id: ID!, input: JewelryTypeInput): JewelryType
    AddLayout(input: LayoutInput): Layout
    UpdateLayout(id: ID!, input: LayoutInput): Layout
    AddLogo(input: LogoInput): Logo
    UpdateLogo(id: ID!, input: LogoInput): Logo
    AddMaterial(input: MaterialInput): Material
    UpdateMaterial(id: ID!, input: MaterialInput): Material
    AddShape(input: ShapeInput): Shape
    UpdateShape(id: ID!, input: ShapeInput): Shape
    AddShop(input: ShopInput): Shop
    UpdateShop(id: ID!, input: ShopInput): Shop
    AddStone(input: StoneInput): Stone
    UpdateStone(id: ID!, input: StoneInput): Stone
    AddStyle(input: StyleInput): Style
    UpdateStyle(id: ID!, input: StyleInput): Style
  }
`;

// export the typeDefs
module.exports = typeDefs;