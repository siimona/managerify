import { ProductSlk } from './src/dao/product-slk.';
import { dbconfig } from './config/db';
import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';

const config: SqlServerConnectionOptions = {
  name: dbconfig.db.name,
  type: dbconfig.db.type,
  host: dbconfig.db.host,
  port: dbconfig.db.port,
  username: dbconfig.db.username,
  password: dbconfig.db.password,
  database: dbconfig.db.database,
  extra: {
    options: {
      trustServerCertificate: true,
      encrypt: false,
    },
  },
  entities: [ProductSlk],
  migrationsRun: false,
  migrations: [dbconfig.db.migrations],
  synchronize: false,
  cli: {
    migrationsDir: dbconfig.db.migrationsDir,
  },
};

export default config;
