import { GraphQLClient } from 'graphql-request';

const url = process.env.RICK_AND_MORTY_API;

export const graphQLClient = new GraphQLClient(url);
