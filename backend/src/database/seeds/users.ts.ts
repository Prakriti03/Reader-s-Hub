import { Knex } from 'knex';

const TABLE_NAME = 'Users';

/**
 * Delete existing entries and seed values for table TABLE_NAME.
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
          username: "Prakriti",
          email: "prakriti@gmail.com",
          password: "prakriti",
          bio: "hi",
          profilePictureUrl: " "
        },
  
      ]);
    });
}