const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
    type Product{
        _id: ID!
        name: String
        currency: String
        price: Float
        country: String
        city: String
        productId: String
        organisation: Organistion
    }

    type Organisation{
        _id: ID!
        name: String
        city: String
        country: String
        organistionId: String
        products: [Product]
    }

    type Query{
        queryProduct: () => [Product]
        getProductById: (id: String) => Product
        queryOrganisation: () => [Organisation]
        getOrganisationId: (id: String) => Organisation
    }
`;
