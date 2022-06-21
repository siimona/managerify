import * as Joi from '@hapi/joi';

const envVarsSchema = Joi.object()
  .keys({
    MSSQL_DB_TYPE: Joi.string().required(),
    MSSQL_HOST: Joi.string().required(),
    MSSQL_PORT: Joi.number().positive().default(1433),
    MSSQL_DB_USERNAME: Joi.string().required(),
    MSSQL_DB_PASSWORD: Joi.string().required(),
    MSSQL_DB_NAME: Joi.string().required(),
    MSSQL_MIGRATIONS: Joi.string().required(),
    MSSQL_MIGRATIONS_DIR: Joi.string().required(),
    MIGRATIONS_TABLE: Joi.string().required(),
    MSSQL_NAME: Joi.string().required(),
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
    type: envVars.MSSQL_DB_TYPE,
    host: envVars.MSSQL_HOST,
    port: envVars.MSSQL_PORT,
    username: envVars.MSSQL_DB_USERNAME,
    password: envVars.MSSQL_DB_PASSWORD,
    database: envVars.MSSQL_DB_NAME,
    migrations: envVars.MSSQL_MIGRATIONS,
    migrationsDir: envVars.MSSQL_MIGRATIONS_DIR,
    migrationsTableName: envVars.MIGRATIONS_TABLE,
    name: envVars.MSSQL_NAME,
  },
};
