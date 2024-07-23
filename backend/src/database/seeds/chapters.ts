import { Knex } from "knex";

const TABLE_NAME = "Chapters";

/**
 * Delete existing entries and seed values for table Chapters.
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
          id: "0",
          stories_id: "3",
          number: "1",
          title: "first chap",
          content_url: "https://",
          status: "published",
          image_url: "https://",
        },
      ]);
    });
}
