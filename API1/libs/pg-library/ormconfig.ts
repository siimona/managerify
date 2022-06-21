import { ProductMob } from './src/dao/product-mob.';
import { dbconfig } from './config/db';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  name: dbconfig.db.name,
  type: dbconfig.db.type,
  host: dbconfig.db.host,
  port: dbconfig.db.port,
  username: dbconfig.db.username,
  password: dbconfig.db.password,
  database: dbconfig.db.database,
  entities: [ProductMob],
  migrations: [dbconfig.db.migrations],
  logging: true,
  migrationsTableName: dbconfig.db.migrationsTableName,
  migrationsRun: false,
  cli: {
    migrationsDir: dbconfig.db.migrationsDir,
  },
  synchronize: false,
};

export default config;
