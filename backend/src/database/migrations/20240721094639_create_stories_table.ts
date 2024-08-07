import { Knex } from "knex";

const TABLE_NAME = "Stories";

/**
 * Create table Stories.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.bigIncrements("id").primary();
    table.string("title", 100).notNullable();
    table.string("description");
    table
      .bigInteger("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("Users")
      .onDelete("CASCADE");
    table.string("cover_image_url");
  });
}

/**
 * Drop table Stories.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(TABLE_NAME);
}
