export default class CustomError extends Error {
  status: number;
  constructor(message: string = "Đã có lỗi xảy ra", status: number = 500) {
    super(message);
    this.status = status;
  }
}
