import { Knex } from 'knex';

const TABLE_NAME = 'Reading-List';

/**
 * Delete existing entries and seed values for table Reading-List.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export function seed(knex: Knex): Promise<void> {
  return knex(TABLE_NAME)
    .del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {
         id : '0',
         user_id : '2',
         stories_id : '3'
        },
      ]);
    });
}