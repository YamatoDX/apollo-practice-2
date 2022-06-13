const { gql } = require("apollo-server");

const typeDefs = gql`
  type Product {
    _id: ID!
    name: String
    currency: String
    price: Float
    country: String
    city: String
    productId: String
    organisationId: String
    organisation: Organisation
  }

  type Organisation {
    _id: ID!
    name: String
    city: String
    country: String
    products: [Product]
  }

  type Query {
    queryProduct: [Product]
    getProductById(id: String): Product
    queryOrganisation: [Organisation]
    getOrganisationById(id: String): Organisation
  }

  type Mutation {
    addProduct(_id: ID!, name: String, organisationId: String): Product
    deleteProduct(_id: String): Product
    deleteOrg(_id: String): Organisation
  }
`;

module.exports = {
  typeDefs,
};
