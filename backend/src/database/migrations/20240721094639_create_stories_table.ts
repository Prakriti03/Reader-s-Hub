import { Knex } from 'knex';

const TABLE_NAME = 'Stories';


/**
 * Create table Stories.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.bigIncrements('story_id').primary();
    table.string('title').notNullable();
    table.bigInteger('user_id').unsigned().notNullable().references('id').inTable('Users');
    table.timestamp('published_date');
    table.enum('status', ['draft', 'published']);
    table.string('image_url');
    table.timestamp('updated_at').nullable();
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