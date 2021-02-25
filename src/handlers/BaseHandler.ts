import { Response } from 'express';
import DTO from '../domain/dto/DTO';
import IApiMessage from '../domain/models/IApiMessage';
import IApiResponse from '../domain/models/IApiResponse';
import IServiceResponse from '../domain/models/IServiceResponse';

export function treatResponse<T = unknown>(
  expressResponse: Response,
  dataResponse: IApiResponse<T> | IApiMessage | undefined
): Response<any> {
  if (dataResponse === undefined) {
    return expressResponse.status(500).send(getUnexpectedErrorMsg());
  }

  return expressResponse.status(dataResponse.statusCode).send(dataResponse);
}

export async function execService<T = unknown>(
  serviceFunc: (...args: any) => Promise<IServiceResponse<T>>,
  ...data: any
): Promise<IApiResponse<T> | IApiMessage> {
  const result = await serviceFunc(data);

  let statusCode;

  if (result.data) {
    statusCode = getStatusCode(result.data);

    if (typeof (result.data) === 'string') {
      return createApiMessage(result.data, statusCode);
    } else {
      return {
        data: result.data,
        statusCode,
      } as IApiResponse<T>;
    }
  }

  statusCode = getStatusCode(result.error);

  return {
    message: result.error,
    statusCode,
  } as IApiMessage;
}

export function verifyDTO(dto: DTO, argList: string[]) {
  const emptyFields = [];

  for (let i = 0; i < argList.length; i++) {
    const key = argList[i];

    if (dto[key] === undefined) {
      emptyFields.push(key);
    }
  }

  return emptyFields;
}

export function createApiMessage(message: string, statusCode: number = 200): IApiMessage {
  return {
    message, statusCode,
  } as IApiMessage;
}

function getStatusCode(data: undefined | string | Record<string, string> | unknown): number {
  if (data === undefined) {
    return 500;
  } else if (typeof (data) === 'string' && data.includes('unknown-error')) {
    return 500;
  } else {
    return 200;
  }
}

function getUnexpectedErrorMsg() {
  return {
    message: 'unexpected-error',
    statusCode: 500,
  } as IApiMessage;
}
