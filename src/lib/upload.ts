import cloudinary from "@/lib/cloudinary";
import CustomError from "@/lib/cutomError";

export const uploadToCloudinary = async (path: string) => {
  if (!path || !path.startsWith("data:image/")) {
    throw new CustomError("Đường dẫn không hợp lệ !", 400);
  }

  try {
    const data = await cloudinary.uploader.upload(path, {
      folder: `/blogs`,
      overwrite: true,
    });

    return data.secure_url;
  } catch (err) {
    throw new Error("Tải ảnh thất bại !!");
  }
};
