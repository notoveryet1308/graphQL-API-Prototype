import {gql} from 'apollo-server-express';
const typeDefs = gql`
 type Query{
    property(id: ID!): Property!
    owner(id: ID!): Owner!
    properties:[Property!]
    owners:[Owner!]
    city(name:ID!): City!
  }
type Property{
    id: ID!
    name: String!
    price: Int!
    isAvaliable: Boolean!
    city: String!
    parking: Boolean
    ownerId: ID!
    owner: Owner!
}

type Owner{
  id: ID!
  name: String!
  contactNum: Int!
  email:String
  property:[Property!]!
}

type City{
  name: String!
  properties:[Property!]
}

type Mutation {
  createProperty(name: String!, 
                 price: Int!,  
                 city: String!, 
                 parking: Boolean!,
                 ownerId: ID!): Property!
}

type Subscription{
  propertyAdded: Property!
}
`

export default typeDefs;