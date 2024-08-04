import { Knex } from "knex";

const TABLE_NAME = "Reviews";

/**
 * Create table Reviews.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.bigIncrements("id");

    table.bigint("rating").checkBetween([1, 5]);
    table.text("comment");

    table
      .bigInteger("stories_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("Stories")
      .onDelete("CASCADE");

    table
      .bigInteger("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("Users")
      .onDelete("CASCADE");

    table.unique(["rating", "user_id"]);
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
