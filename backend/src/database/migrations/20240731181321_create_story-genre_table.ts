import { Knex } from 'knex';

const TABLE_NAME = 'Story-Genre';


/**
 * Create table Story-Genre.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.bigIncrements('id');

    table
    .bigInteger("stories_id")
    .unsigned()
    .notNullable()
    .references("id")
    .inTable("Stories")
    .onDelete("CASCADE");

    table.bigInteger("genre_id").unsigned().notNullable().references("id").inTable("Genres").onDelete("CASCADE")
  });
}

/**
 * Drop table Story-Genre.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(TABLE_NAME);
}