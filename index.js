const { ApolloServer, gql } = require("apollo-server");
const { allProducts, allOrgs } = require("./db");

const typeDefs = gql`
    type Product{
        _id: ID!
        name: String
        currency: String
        price: Float
        country: String
        city: String
        productId: String
        organisationId: String
        organisation: Organistion
    }

    type Organisation{
        _id: ID!
        name: String
        city: String
        country: String
        products: [Product]
    }

    type Query{
        queryProduct: () => [Product]
        getProductById: (id: String) => Product
        queryOrganisation: () => [Organisation]
        getOrganisationId: (id: String) => Organisation
    }
`;

const resolvers = {
  Query: {
    queryProduct: () => allProducts,
    getProductById: (parent, args, ctx) => {
      const argId = args.id;
      return (
        allProducts.filter((eachProduct) => eachProduct._id === argId)?.[0] ??
        {}
      );
    },
    queryOrganisation: () => allOrgs,
    getOrganisationById: (parent, args, ctx) => {
      const argId = args.id;
      return allOrgs.filter((eachOrg) => eachOrg._id === argId)?.[0] ?? {};
    },
  },
  Product: {
    organisation: (parent, args, ctx) => {
      const parentOrganisationId = parent.organisationId;
      return (
        allOrgs.filter(
          (eachOrg) => eachOrg._id === parentOrganisationId
        )?.[0] ?? {}
      );
    },
  },
  Organisation: {
    products: (parent, args, ctx) => {
      const parentId = parent._id;
      return allProducts.filter(
        (eachProduct) => eachProduct.organisationId === parentId
      );
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Listening to ${url}`);
});
