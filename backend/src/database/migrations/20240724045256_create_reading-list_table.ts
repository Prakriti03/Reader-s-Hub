import { Knex } from 'knex';

const TABLE_NAME = 'Reading-List';


/**
 * Create table Reading-List.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.bigIncrements('id');

    table
    .bigInteger("user_id")
    .unsigned()
    .notNullable()
    .references("id")
    .inTable("Users")
    .onDelete("CASCADE");

    table
    .bigInteger("stories_id")
    .unsigned()
    .notNullable()
    .references("id")
    .inTable("Stories")
    .onDelete("CASCADE");
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