import Knex from 'knex';
import ProductDTO from '../../../domain/dto/ProductDTO';

export async function seed(knex: Knex) {
  const products: ProductDTO[] = [];

  products.push({
    name: 'Arroz',
    price: 3,
  });

  products.push({
    name: 'Feijão',
    price: 5,
  });

  products.push({
    name: 'Óleo',
    price: 9,
  });

  products.push({
    name: 'Macarrão',
    price: 2.5,
  });

  products.push({
    name: 'Carne kg',
    price: 17,
  });

  return await knex('products').insert(products);
}