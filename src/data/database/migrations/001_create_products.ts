import Knex from 'knex';

export async function up(knex: Knex) {
  return await knex.schema.createTable('products', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.decimal('price').notNullable();
  });
}

export async function down(knex: Knex) {
  return await knex.schema.dropTable('products');
}
