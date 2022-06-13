const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const { Product } = require("./resolvers/Product");
const { Organisation } = require("./resolvers/Organisation");
const { allProducts, allOrgs } = require("./db");

const resolvers = {
  Query,
  Mutation,
  Product,
  Organisation,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    allProducts,
    allOrgs,
  },
  csrfPrevention: true,
  introspection: true,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Listening to ${url}`);
});
