import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";
import { AppDataSource } from "./database";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

AppDataSource.initialize()
  .then(() => {
    startStandaloneServer(server, {
      listen: { port: 4000 },
    })
      .then(({ url }) => {
        console.log(`🚀  Server ready at: ${url}`);
      })
      .catch((error) => console.log("Error in server: ", error));
  })
  .catch((error) => console.log("Error in db: ", error));
