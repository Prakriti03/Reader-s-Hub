import { Knex } from "knex";

const TABLE_NAME = "Users";

/**
 * Create table Users.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.bigIncrements("id").primary();
    table.string("username", 100).notNullable().unique();
    table.string("email", 100).notNullable().unique();
    table.string("password", 100).notNullable();
    table.text("bio");
    table.string("profilePictureUrl");
    table.timestamp("created_at").notNullable().defaultTo(knex.raw("now()"));
    table.timestamp("updated_at").nullable();
  });
}

/**
 * Drop table Users.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(TABLE_NAME);
}
