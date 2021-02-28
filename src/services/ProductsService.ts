import IProduct from "../domain/models/IProduct";
import IServiceResponse from "../domain/models/IServiceResponse";
import * as ProductRespository from '../data/repositories/ProductRepository';
import * as Facade from '../data/Facade';
import ProductDTO from "../domain/dto/ProductDTO";
import UpdateProductDTO from "../domain/dto/UpdateProductDTO";

export async function findAll(): Promise<IServiceResponse<IProduct[]>> {
  const result: IServiceResponse<IProduct[]> = {};

  try {
    result.data = await Facade.findAllProducts();
  } catch (e) {
    result.error = e.message;
  }

  return result;
}

export async function add(data: ProductDTO) {
  const result: IServiceResponse<string> = {};

  try {
    const response = await Facade.addProduct(data);

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
    const response = await Facade.updateProduct(data);

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
    const response = await Facade.deleteProduct(id);

    if (!response) {
      throw new Error('RemovingProduct: unknown-error');
    }

    result.data = 'producted-removed';
  } catch (e) {
    result.error = e.message;
  }

  return result;
}
