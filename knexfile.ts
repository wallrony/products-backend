// Importação de bibliotecas externas.
import path from 'path';
require('dotenv-safe').config({
  allowEmptyValues: true,
});

/* Definindo a exportação de configurações da
 * biblioteca Knex.
 */
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
      port: process.env.DB_PORT,
      ssl: false
    },
    pool: {
      min: 2,
      max: 6,
      createTimeoutMillis: 3000,
      acquireTimeoutMillis: 30000,
      idleTimeoutMillis: 30000,
      reapIntervalMillis: 1000,
      createRetryIntervalMillis: 100,
      propagateCreateError: false,
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'data', 'database', 'migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'data', 'database', 'seeds'),
    },
    useNullAsDefault: true,
  }
};
