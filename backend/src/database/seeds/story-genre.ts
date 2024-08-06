import { Knex } from "knex";

const TABLE_NAME = "Story-Genre";

/**
 * Delete existing entries and seed values for table Story-Genre.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export function seed(knex: Knex): Promise<void> {
  return knex(TABLE_NAME)
    .del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        { stories_id: 76, genre_id: 1 }, // Fantasy
        { stories_id: 76, genre_id: 5 }, // Romance
        { stories_id: 77, genre_id: 5 }, // Romance
        { stories_id: 77, genre_id: 6 }, // Thriller
        { stories_id: 78, genre_id: 1 }, // Fantasy
        { stories_id: 78, genre_id: 3 }, // Horror
        { stories_id: 79, genre_id: 4 }, // Mystery
        { stories_id: 79, genre_id: 6 }, // Thriller
        { stories_id: 80, genre_id: 4 }, // Mystery
        { stories_id: 80, genre_id: 5 }, // Romance
        { stories_id: 81, genre_id: 5 }, // Romance
        { stories_id: 81, genre_id: 1 }, // Fantasy
        { stories_id: 82, genre_id: 1 }, // Fantasy
        { stories_id: 82, genre_id: 7 }, // Science Fiction
        { stories_id: 83, genre_id: 7 }, // Science Fiction
        { stories_id: 83, genre_id: 6 }, // Thriller
        { stories_id: 84, genre_id: 3 }, // Horror
        { stories_id: 84, genre_id: 4 }, // Mystery
        { stories_id: 85, genre_id: 5 }, // Romance
        { stories_id: 85, genre_id: 2 }, // Humour
        { stories_id: 86, genre_id: 2 }, // Humour
        { stories_id: 86, genre_id: 6 }, // Thriller
        { stories_id: 87, genre_id: 1 }, // Fantasy
        { stories_id: 87, genre_id: 4 }, // Mystery
        { stories_id: 88, genre_id: 1 }, // Fantasy
        { stories_id: 88, genre_id: 5 }, // Romance
        { stories_id: 89, genre_id: 5 }, // Romance
        { stories_id: 89, genre_id: 6 }, // Thriller
        { stories_id: 90, genre_id: 4 }, // Mystery
        { stories_id: 90, genre_id: 7 }, // Science Fiction
        { stories_id: 91, genre_id: 1 }, // Fantasy
        { stories_id: 91, genre_id: 2 }, // Humour
        { stories_id: 92, genre_id: 6 }, // Thriller
        { stories_id: 92, genre_id: 3 }, // Horror
        { stories_id: 93, genre_id: 1 }, // Fantasy
        { stories_id: 93, genre_id: 5 }, // Romance
        { stories_id: 94, genre_id: 4 }, // Mystery
        { stories_id: 94, genre_id: 2 }, // Humour
      ]);
    });
}
