module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 15432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  autoLoadEntities: true, // エンティティの自動読み込み
  entities: ['dist/entities/*.entity.js'], // エンティティファイルの読み込み
  migrations: ['dist/migrations/*.js'], // マイグレーションファイルの読み込み
  cli: {
    entitiesDir: 'src/entities', // エンティティファイルの出力先ディレクトリ
    migrationsDir: 'src/migrations' // マイグレーションファイルの出力先ディレクトリ
  }
}