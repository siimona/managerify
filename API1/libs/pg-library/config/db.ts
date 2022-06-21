import * as Joi from '@hapi/joi';

const envVarsSchema = Joi.object()
  .keys({
    POSTGRES_DB_TYPE: Joi.string().required(),
    POSTGRES_HOST: Joi.string().required(),
    POSTGRES_PORT: Joi.number().positive().default(5432),
    POSTGRES_DATABASE_USER: Joi.string().required(),
    POSTGRES_DATABASE_PASSWORD: Joi.string().required(),
    POSTGRES_DB_NAME: Joi.string().required(),
    PG_MIGRATIONS: Joi.string().required(),
    PG_MIGRATIONS_DIR: Joi.string().required(),
    MIGRATIONS_TABLE: Joi.string().required(),
    POSTGRES_NAME: Joi.string().required(),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}
export const dbconfig = {
  db: {
    type: envVars.POSTGRES_DB_TYPE,
    host: envVars.POSTGRES_HOST,
    port: envVars.POSTGRES_PORT,
    username: envVars.POSTGRES_DATABASE_USER,
    password: envVars.POSTGRES_DATABASE_PASSWORD,
    database: envVars.POSTGRES_DB_NAME,
    migrations: envVars.PG_MIGRATIONS,
    migrationsDir: envVars.PG_MIGRATIONS_DIR,
    migrationsTableName: envVars.MIGRATIONS_TABLE,
    name: envVars.POSTGRES_NAME,
  },
};
