import { Knex } from "knex";

const TABLE_NAME = "Chapters";

/**
 * Create table Chapters.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.bigIncrements("id").primary();
    table
      .bigInteger("stories_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("Stories")
      .onDelete("CASCADE");
    table.bigInteger("number").notNullable();
    table.string("title", 100).notNullable();
    table.string("content_url");
    table.timestamp("published_date").notNullable().defaultTo(knex.raw("now()"));
    table.enum("status", ["draft", "published"]);
    table.string("image_url");
    table.unique(["stories_id", "number"]);
  });
}

/**
 * Drop table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(TABLE_NAME);
}
