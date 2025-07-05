import { Button } from "@/components/ui/button";

const ButtonPrimary = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button className="bg-indigo-500 hover:bg-indigo-800">{children}</Button>
  );
};

export default ButtonPrimary;
