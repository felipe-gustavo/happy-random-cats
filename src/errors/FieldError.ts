export class FieldError extends Error {
  constructor(public field: string, message: string) {
    super(message);
  }
}
