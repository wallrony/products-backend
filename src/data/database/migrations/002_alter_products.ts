import Knex from 'knex';

export async function up(knex: Knex) {
  return await knex.schema.alterTable('products', table => {
    table.string('image_path', 255).nullable;
  });
}

export async function down(knex: Knex) {
  return await knex.schema.alterTable('products', table => {
    table.dropColumn('image_path');
  })
}
