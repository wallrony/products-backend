import IProduct from "../domain/models/IProduct";
import IServiceResponse from "../domain/models/IServiceResponse";
import * as ProductRespository from '../data/repositories/ProductRepository';
import ProductDTO from "../domain/dto/ProductDTO";
import UpdateProductDTO from "../domain/dto/UpdateProductDTO";

export async function findAll(): Promise<IServiceResponse<IProduct[]>> {
  const result: IServiceResponse<IProduct[]> = {};

  try {
    result.data = await ProductRespository.findAll();
  } catch (e) {
    result.error = e.message;
  }

  return result;
}

export async function add(data: ProductDTO) {
  const result: IServiceResponse<string> = {};

  try {
    const response = await ProductRespository.add(data);

    if (!response) {
      throw new Error('AddingProduct: unknown-error');
    }

    result.data = 'producted-added';
  } catch (e) {
    result.error = e.message;
  }

  return result;
}

export async function update(data: UpdateProductDTO) {
  const result: IServiceResponse<string> = {};

  try {
    const response = await ProductRespository.update(data);

    if (!response) {
      throw new Error('UpdatingProduct: unknown-error');
    }

    result.data = 'producted-updated';
  } catch (e) {
    result.error = e.message;
  }

  return result;
}

export async function remove(id: number) {
  const result: IServiceResponse<string> = {};

  try {
    const response = await ProductRespository.remove(id);

    if (!response) {
      throw new Error('RemovingProduct: unknown-error');
    }

    result.data = 'producted-removed';
  } catch (e) {
    result.error = e.message;
  }

  return result;
}
