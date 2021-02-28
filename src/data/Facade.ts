import ProductDTO from '../domain/dto/ProductDTO';
import UpdateProductDTO from '../domain/dto/UpdateProductDTO';
import * as ProductRepository from './repositories/ProductRepository';

export async function findAllProducts() {
  return await ProductRepository.findAll();
}

export async function addProduct(dto: ProductDTO) {
  return await ProductRepository.add(dto);
}

export async function updateProduct(dto: UpdateProductDTO) {
  return await ProductRepository.update(dto);
}

export async function deleteProduct(id: number) {
  return await ProductRepository.remove(id);
}
