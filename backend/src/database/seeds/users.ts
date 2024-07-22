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
          id : "0",
          username: "Prakriti",
          email: "prakriti@gmail.com",
          password: "$2b$10$DSzICaDDpbkutLyeSS6m8u.45e0kGN1wTduAZkZfb42i/mpEtcUjC",
          bio: "hi",
          profilePictureUrl: " ",
          role : "admin",


        },
  
      ]);
    });
}