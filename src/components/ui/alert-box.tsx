import { CircleCheck, TriangleAlert } from "lucide-react";

type AlertBoxProps = {
  message: string;
  type?: "success" | "error";
};

const AlertBox = ({ message, type }: AlertBoxProps) => {
  const isSuccess = type === "success";
  const bgColor = isSuccess ? "bg-emerald-500/15" : "bg-destructive/15";
  const textColor = isSuccess ? "text-emerald-500" : " text-destructive";
  const icon = !isSuccess ? (
    <TriangleAlert size={15} />
  ) : (
    <CircleCheck size={15} />
  );

  return (
    <div
      className={`${bgColor} bg-destructive p-3 rounded-md flex items-center gap-x-2 text-sm ${textColor}`}
    >
      {icon}
      <p>{message}</p>
    </div>
  );
};

export default AlertBox;
