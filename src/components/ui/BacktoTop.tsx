import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import useBackToTop from "@/hooks/useBackToTop";

const BacktoTop = () => {
  const visible = useBackToTop();

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Button
      size="icon"
      onClick={handleClick}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-6 right-6 z-40 rounded-full border border-indigo-500 bg-indigo-500 text-white shadow-lg transition-opacity duration-300 hover:bg-indigo-600",
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
};

export default BacktoTop;
