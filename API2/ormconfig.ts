import { Product } from './apps/api-2/src/product/entity/product.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres' as const,
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'productsDb',
  entities: [Product],
  migrationsRun: false,
  logging: true,
  migrationsTableName: 'migrations',
  migrations: [
    'apps/api-2/src/database/migrations/**/*.ts',
    'apps/api-2/src/database/migrations/**/*.js',
  ],
  synchronize: false,
  cli: {
    migrationsDir: 'apps/api-2/src/database/migrations',
  },
};

export default config;
