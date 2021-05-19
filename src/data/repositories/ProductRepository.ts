import ProductDTO from '../../domain/dto/ProductDTO';
import UpdateProductDTO from '../../domain/dto/UpdateProductDTO';
import IProduct from '../../domain/models/IProduct';
import connection from '../database/connection';

const tableName = 'products';

export async function findAll(): Promise<IProduct[]> {
  const result = await connection<IProduct>(tableName)
    .select();

  return result;
}

export async function add(data: ProductDTO): Promise<boolean> {
  const result = await connection(tableName)
    .insert(data).returning('id');

  return result && result[0] > 0;
}

export async function update(data: UpdateProductDTO): Promise<boolean> {
  const dataToUpdate: Record<string, any> = {
    name: data.name,
    price: data.price,
  };

  if (data.image_path) {
    dataToUpdate['image_path'] = data.image_path
  }

  const result = await connection(tableName)
    .update(dataToUpdate)
    .where('id', '=', data.id);

  return result !== undefined && result > 0;
}

export async function remove(id: number): Promise<boolean> {
  const result = await connection(tableName)
    .delete()
    .where('id', '=', id);

  return result !== undefined && result > 0;
}
