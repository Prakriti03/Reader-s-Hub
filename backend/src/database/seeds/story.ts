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
          title: "The Last Wish",
          description:
            "A thrilling adventure of a young boy with a mysterious destiny.",
          user_id: "0",
          cover_image_url:
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=60",
        },
        {
          title: "The Final Chapter",
          description:
            "A tale of love, loss, and the pursuit of a better tomorrow.",
          user_id: "0",
          cover_image_url:
            "https://images.unsplash.com/photo-1522107177-6c6d29e3d47f?w=500&auto=format&fit=crop&q=60",
        },
        {
          title: "Rise of the Phoenix",
          description:
            "A story of rebirth and new beginnings in a post-apocalyptic world.",
          user_id: "49",
          cover_image_url:
            "https://images.unsplash.com/photo-1539030565856-0c802ffbe330?w=500&auto=format&fit=crop&q=60",
        },
        {
          title: "Shadows of the Past",
          description:
            "A gripping mystery that unravels the secrets of the past.",
          user_id: "49",
          cover_image_url:
            "https://images.unsplash.com/photo-1520809217940-b1a3486f6c15?w=500&auto=format&fit=crop&q=60",
        },
        {
          title: "The Hidden Truth",
          description:
            "A detective's journey to uncover the truth behind a series of murders.",
          user_id: "51",
          cover_image_url:
            "https://images.unsplash.com/photo-1579547621706-1a9c79d5b9af?w=500&auto=format&fit=crop&q=60",
        },
        {
          title: "Echoes of the Heart",
          description: "A romance that transcends time and space.",
          user_id: "51",
          cover_image_url:
            "https://images.unsplash.com/photo-1520897519464-1a09d3bc0982?w=500&auto=format&fit=crop&q=60",
        },
        {
          title: "Whispers of the Forest",
          description:
            "A fantasy novel set in a mystical forest filled with magical creatures.",
          user_id: "66",
          cover_image_url:
            "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&auto=format&fit=crop&q=60",
        },
        {
          title: "Tides of Destiny",
          description: "An epic saga of warriors fighting for their destiny.",
          user_id: "66",
          cover_image_url:
            "https://images.unsplash.com/photo-1560200357-199b3fc5e9bd?w=500&auto=format&fit=crop&q=60",
        },
        {
          title: "Mystic Realms",
          description:
            "A journey through mystical realms filled with magic and wonder.",
          user_id: "67",
          cover_image_url:
            "https://images.unsplash.com/photo-1535930749574-f3a7b4c81f57?w=500&auto=format&fit=crop&q=60",
        },
        {
          title: "Forgotten Legends",
          description:
            "Uncover the forgotten legends of an ancient civilization.",
          user_id: "67",
          cover_image_url:
            "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=500&auto=format&fit=crop&q=60",
        },
        {
          title: "Journey to the Unknown",
          description: "A brave explorer's journey to uncharted territories.",
          user_id: "68",
          cover_image_url:
            "https://images.unsplash.com/photo-1516959519969-14026581c105?w=500&auto=format&fit=crop&q=60",
        },
        {
          title: "Secrets of the Deep",
          description:
            "Dive into the secrets hidden beneath the ocean's depths.",
          user_id: "68",
          cover_image_url:
            "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&auto=format&fit=crop&q=60",
        },
        {
          title: "Moonlit Nights",
          description:
            "Romantic tales set under the enchanting moonlit nights.",
          user_id: "69",
          cover_image_url:
            "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&auto=format&fit=crop&q=60",
        },
        {
          title: "The Haunted Manor",
          description: "A thrilling ghost story set in an old haunted manor.",
          user_id: "69",
          cover_image_url:
            "https://images.unsplash.com/photo-1534531688091-a4585a52082c?w=500&auto=format&fit=crop&q=60",
        },
        {
          title: "City of Dreams",
          description:
            "A young dreamer's journey to find success in the big city.",
          user_id: "50",
          cover_image_url:
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&auto=format&fit=crop&q=60",
        },
        {
          title: "Winds of Change",
          description:
            "A tale of change and adaptation in a rapidly evolving world.",
          user_id: "50",
          cover_image_url:
            "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?w=500&auto=format&fit=crop&q=60",
        },
        {
          title: "Beyond the Horizon",
          description: "A voyage to explore the world beyond the horizon.",
          user_id: "70",
          cover_image_url:
            "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&auto=format&fit=crop&q=60",
        },
        {
          title: "Legacy of the Ancients",
          description:
            "Discover the legacy left behind by an ancient civilization.",
          user_id: "70",
          cover_image_url:
            "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=500&auto=format&fit=crop&q=60",
        },
        {
          title: "The Enchanted Forest",
          description: "A magical journey through an enchanted forest.",
          user_id: "71",
          cover_image_url:
            "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&auto=format&fit=crop&q=60",
        },
      ]);
    });
}
