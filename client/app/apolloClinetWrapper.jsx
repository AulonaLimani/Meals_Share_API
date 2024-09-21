"use client";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});

export default function ApolloProviderWrapper({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
