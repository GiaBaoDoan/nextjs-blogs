export enum UserRole {
  admin = "Admin",
  user = "Người dùng",
  staff = "Nhân viên",
}

export enum UserStatus {
  DRAFT = "Nháp",
  PENDING = "Chờ duyệt",
  PRIVATE = "Lưu trữ",
  PUBLIC = "Công khai",
}

export enum EmailType {
  RESET_PASSWORD = "reset_password",
  VERIFY = "verify_email",
}
