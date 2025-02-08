import type { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      port: 5432,
      user: "postgres",
      password: "postgres",
      database: "back_test"
    },
    migrations: {
      directory: "./src/db/migrations",
    },
  }
};

export default config;
