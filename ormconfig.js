const PROD = process.env.NODE_ENV === 'production';

module.exports = {
  type: 'postgres',
  url: 'postgresql://postgres:postgres@localhost/linkedin',
  synchronize: false,
  logging: !PROD,
  entities: ['dist/entities/**.*.js'],
  migrations: ['dist/migrations/**.*.js'],
  cli: {
    entitiesDir: ['dist/entities/**.*.js'],
    migrationsDir: ['dist/migrations/**.*.js'],
  },
};
