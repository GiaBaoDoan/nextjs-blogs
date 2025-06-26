import { CircleCheck } from "lucide-react";
import { toast } from "sonner";

const SuccessToast = (description: string) => {
  return toast("Thành công", {
    icon: <CircleCheck size={20} fill="black" color="white" />,
    description,
  });
};

export default SuccessToast;
