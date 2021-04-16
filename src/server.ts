import 'reflect-metadata';
import 'colors';
import 'dotenv/config';
import http from 'http';
import { createApp } from './app';
import { PORT, __prod__ } from './constants';

const main = async () => {
  const { app } = await createApp();
  const server = http.createServer(app);

  server.listen(PORT, () =>
    console.log(
      `Server is running on http://localhost:${PORT}/graphql`.blue.bold
    )
  );
};

main();
