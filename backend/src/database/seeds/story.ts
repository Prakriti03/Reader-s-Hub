import { Knex } from "knex";
import { describe } from "node:test";
import { title } from "process";

const TABLE_NAME = "Stories";

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
          id: "1",
          title: "Dimple ki Pimple",
          description: "oooo",
          user_id: "0",
        },
      ]);
    });
}
