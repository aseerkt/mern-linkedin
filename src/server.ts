import 'reflect-metadata';
import 'colors';
import 'dotenv/config';
import http from 'http';
import { createApp } from './app';
import { PORT, __prod__ } from './constants';
import { createConnection } from 'typeorm';

const main = async () => {
  const conn = await createConnection();

  console.log(`Connected to DB: ${conn.driver.database}`.yellow.bold);

  const { app } = await createApp();
  const server = http.createServer(app);

  server.listen(PORT, () =>
    console.log(
      `Server is running on http://localhost:${PORT}/graphql`.blue.bold
    )
  );
};

main();
