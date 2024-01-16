const { DataSource } = require('typeorm');

module.exports = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 15432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: ['dist/entities/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  synchronize: true,
  autoLoadEntities: true,
});
