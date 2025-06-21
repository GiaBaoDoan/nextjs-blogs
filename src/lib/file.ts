export const convertToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject("Kết quả không phải là chuỗi base64");
      }
    };

    reader.onerror = () => reject("Lỗi khi đọc file");

    reader.readAsDataURL(file);
  });
};
