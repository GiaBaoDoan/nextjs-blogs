"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchInputProps {
  keyword: string;
  onChange: (query: { keyword: string; page: number }) => void;
}

export function SearchInput({ keyword, onChange }: SearchInputProps) {
  return (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Tìm kiếm"
        value={keyword}
        onChange={(e) => onChange({ keyword: e.target.value, page: 1 })}
        className="pl-9"
      />
    </div>
  );
}
