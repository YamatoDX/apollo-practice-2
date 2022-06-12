const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Product } = require("./resolvers/Product");
const { Organisation } = require("./resolvers/Organisation");
//

const resolvers = {
  Query,
  Product,
  Organisation,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  introspection: true,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Listening to ${url}`);
});
