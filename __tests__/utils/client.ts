import { ApolloServer } from "@apollo/server";

import typeDefs from "../../src/typeDefs";
import resolvers from "../../src/resolvers";

export const request = async (query: any, variables?: any) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const result: any = await server.executeOperation({
    query,
    variables,
  });

  server.stop();

  return result.body.singleResult;
};
