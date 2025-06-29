import { CircleX } from "lucide-react";
import { toast } from "sonner";

const ErrorToast = (description: string = "Đã có lỗi xảy rả") => {
  toast("Yêu cầu thất bại !!", {
    description,
    icon: <CircleX size={20} fill="black" color="white" />,
  });
};

export default ErrorToast;
