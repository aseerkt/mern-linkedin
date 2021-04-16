import express from 'express';
import cookieParser from 'cookie-parser';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

export const createApp = async () => {
  const app = express();

  app.use(cookieParser());

  app.get('/', (_req, res) => {
    res.send('Hello Welcome to Linkedin Clone');
  });

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [__dirname + '/resolvers/**/*.{js,ts}'],
    }),
    uploads: false,
    context: ({ req, res }) => ({ req, res }),
  });

  // TODO: might need to set cors false here
  apolloServer.applyMiddleware({ app });

  return { app };
};
