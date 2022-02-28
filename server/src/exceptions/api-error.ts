export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    Object.setPrototypeOf(this, ApiError.prototype);
  }

  static authError() {
    return new ApiError("Авторизируйтесь что бы продолжить", 401);
  }

  static requestError(msg: string) {
    return new ApiError(msg, 400);
  }
}
