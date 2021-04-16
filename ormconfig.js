const PROD = process.env.NODE_ENV === 'production';

module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: !PROD,
  entities: ['dist/entities/**/*.js'],
  migrations: ['dist/migrations/**/*.js'],
  cli: {
    entitiesDir: ['src/entities'],
    migrationsDir: ['src/migrations'],
  },
};
