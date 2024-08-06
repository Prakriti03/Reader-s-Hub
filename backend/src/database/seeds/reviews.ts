import { Knex } from "knex";

const TABLE_NAME = "Reviews";

/**
 * Delete existing entries and seed values for table Reviews.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export function seed(knex: Knex): Promise<void> {
  return knex(TABLE_NAME)
    .del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        { rating: 5, comment: "Amazing story!", stories_id: 76, user_id: 0 },
        {
          rating: null,
          comment: "Loved the characters.",
          stories_id: 76,
          user_id: 0,
        },
        {
          rating: 4,
          comment: "Great plot twists!",
          stories_id: 77,
          user_id: 49,
        },
        {
          rating: null,
          comment: "Can't wait for the next chapter.",
          stories_id: 77,
          user_id: 49,
        },
        {
          rating: 3,
          comment: "Good read but a bit slow.",
          stories_id: 78,
          user_id: 51,
        },
        {
          rating: null,
          comment: "Enjoyed the setting.",
          stories_id: 78,
          user_id: 51,
        },
        {
          rating: 5,
          comment: "Couldn't put it down!",
          stories_id: 79,
          user_id: 66,
        },
        {
          rating: null,
          comment: "Amazing cliffhanger.",
          stories_id: 79,
          user_id: 66,
        },
        { rating: 4, comment: "Well written.", stories_id: 80, user_id: 67 },
        {
          rating: null,
          comment: "Beautiful prose.",
          stories_id: 80,
          user_id: 67,
        },
        { rating: 5, comment: "A masterpiece!", stories_id: 81, user_id: 68 },
        {
          rating: null,
          comment: "Absolutely loved it.",
          stories_id: 81,
          user_id: 68,
        },
        {
          rating: 4,
          comment: "Interesting concept.",
          stories_id: 82,
          user_id: 69,
        },
        {
          rating: null,
          comment: "Great world-building.",
          stories_id: 82,
          user_id: 69,
        },
        {
          rating: 3,
          comment: "Good but could be better.",
          stories_id: 83,
          user_id: 50,
        },
        {
          rating: null,
          comment: "Looking forward to the sequel.",
          stories_id: 83,
          user_id: 50,
        },
        { rating: 5, comment: "Fantastic story!", stories_id: 84, user_id: 70 },
        {
          rating: null,
          comment: "Engaging plot.",
          stories_id: 84,
          user_id: 70,
        },
        { rating: 4, comment: "Very enjoyable.", stories_id: 85, user_id: 71 },
        {
          rating: null,
          comment: "Well-developed characters.",
          stories_id: 85,
          user_id: 71,
        },
        {
          rating: 5,
          comment: "Highly recommend!",
          stories_id: 86,
          user_id: 72,
        },
        { rating: null, comment: "Amazing read.", stories_id: 86, user_id: 72 },
        { rating: 4, comment: "Intriguing story.", stories_id: 87, user_id: 2 },
        { rating: null, comment: "Nice pacing.", stories_id: 87, user_id: 2 },
        {
          rating: 3,
          comment: "Could use more action.",
          stories_id: 88,
          user_id: 48,
        },
        {
          rating: null,
          comment: "Loved the ending.",
          stories_id: 88,
          user_id: 48,
        },
        { rating: 5, comment: "Breathtaking!", stories_id: 89, user_id: 54 },
        {
          rating: null,
          comment: "Stunning visuals.",
          stories_id: 89,
          user_id: 54,
        },
        {
          rating: 4,
          comment: "Very entertaining.",
          stories_id: 90,
          user_id: 58,
        },
        {
          rating: null,
          comment: "Great character arcs.",
          stories_id: 90,
          user_id: 58,
        },
        { rating: 3, comment: "Decent read.", stories_id: 91, user_id: 59 },
        {
          rating: null,
          comment: "Liked the dialogues.",
          stories_id: 91,
          user_id: 59,
        },
        { rating: 5, comment: "A must-read!", stories_id: 92, user_id: 60 },
        {
          rating: null,
          comment: "Gripping narrative.",
          stories_id: 92,
          user_id: 60,
        },
        { rating: 4, comment: "Well-crafted.", stories_id: 93, user_id: 61 },
        {
          rating: null,
          comment: "Wonderful story.",
          stories_id: 93,
          user_id: 61,
        },
        {
          rating: 5,
          comment: "Perfectly executed.",
          stories_id: 94,
          user_id: 62,
        },
        {
          rating: null,
          comment: "Highly engaging.",
          stories_id: 94,
          user_id: 62,
        },
        {
          rating: null,
          comment: "Interesting twists.",
          stories_id: 76,
          user_id: 63,
        },
        {
          rating: null,
          comment: "Loved the character development.",
          stories_id: 77,
          user_id: 63,
        },
        {
          rating: null,
          comment: "Great imagery.",
          stories_id: 78,
          user_id: 64,
        },
        {
          rating: null,
          comment: "Captivating storyline.",
          stories_id: 79,
          user_id: 64,
        },
        {
          rating: null,
          comment: "Excellent writing.",
          stories_id: 80,
          user_id: 65,
        },
        {
          rating: null,
          comment: "Thoroughly enjoyable.",
          stories_id: 81,
          user_id: 65,
        },
      ]);
    });
}
