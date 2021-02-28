interface IServiceResponse<T = Record<string, string>> {
  error?: string;
  data?: T;
}

export default IServiceResponse;
