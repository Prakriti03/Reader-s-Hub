import { Knex } from "knex";

const TABLE_NAME = "Genres";

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
          genre: "Fantasy",
        },
        {
          genre: "Humour",
        },
        {
          genre: "Horror",
        },
        {
          genre: "Mystery",
        },
        {
          genre: "Romance",
        },
        {
          genre: "Thriller",
        },
        {
          genre: "Science Fiction",
        },
      ]);
    });
}
