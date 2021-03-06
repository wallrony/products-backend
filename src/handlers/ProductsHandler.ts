import { Request, Response } from 'express';
import fs from 'fs';

import { createApiMessage, execService, treatResponse, verifyDTO } from './BaseHandler';

import * as ProductService from '../services/ProductsService';
import ProductDTO from '../domain/dto/ProductDTO';
import UpdateProductDTO from '../domain/dto/UpdateProductDTO';

export async function findAll(request: Request, response: Response) {
  const result = await execService(ProductService.findAll);

  return treatResponse(response, result);
}

export async function add(request: Request, response: Response) {
  const dto = request.body as ProductDTO;

  if (request.file) {
    dto.image_path = "http://" + request.hostname + ":3333" + '/images/' + request.file.filename;
  }

  let result;

  const emptyFields: string[] = verifyDTO(dto, ['name', 'price']);

  if (emptyFields.length) {
    return treatResponse(
      response,
      createApiMessage(`need ${emptyFields.join(', ')} field(s)`, 400),
    );
  }

  result = await execService(ProductService.add, dto);

  return treatResponse(response, result);
}

export async function update(request: Request, response: Response) {
  const paramId = Number(request.params['id']);
  const dto = request.body as UpdateProductDTO;

  if (request.file) {
    dto.image_path = "http://" + request.hostname + ":3333" + '/images/' + request.file.filename;
  }

  let result;

  const emptyFields: string[] = verifyDTO(dto, ['id', 'name', 'price']);

  if (emptyFields.length) {
    return treatResponse(
      response,
      createApiMessage(`need ${emptyFields.join(', ')} field(s)`),
    );
  }

  if (Number(paramId) !== Number(dto.id)) {
    return treatResponse(
      response,
      createApiMessage(`route and dto ids are diferent, need to be equal`),
    );
  }

  result = await execService(ProductService.update, dto);

  return treatResponse(response, result);
}

export async function remove(request: Request, response: Response) {
  const id = request.params['id'];

  let result;

  if (!id) {
    return treatResponse(
      response,
      createApiMessage(`need product id`),
    );
  }

  result = await execService(ProductService.remove, id);

  return treatResponse(response, result);
}
