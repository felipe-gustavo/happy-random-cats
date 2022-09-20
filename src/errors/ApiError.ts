export class ApiError extends Error {
  constructor(
    public readonly code: string,
    public readonly request: unknown,
    public readonly responseBody: unknown,
    message: string
  ) {
    super(message);
  }
}
