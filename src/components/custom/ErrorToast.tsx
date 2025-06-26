import { CircleX } from "lucide-react";
import { toast } from "sonner";

const ErrorToast = (description: string) => {
  toast("Có lỗi", {
    description,
    icon: <CircleX size={20} fill="black" color="white" />,
  });
};

export default ErrorToast;
