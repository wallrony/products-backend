interface IApiResponse<T = unknown> {
  data: T;
  statusCode: number;
}

export default IApiResponse;
