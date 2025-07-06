"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import useDebounce from "@/hooks/useDebounce";

interface SearchInputProps {
  keyword?: string;
  onChange: (query: { keyword: string; page: number }) => void;
  debounce?: number;
}

export function SearchInput({
  keyword = "",
  onChange,
  debounce = 300,
}: SearchInputProps) {
  const [rawValue, setRawValue] = useState(keyword);

  const debouncedValue = useDebounce(rawValue, debounce);

  useEffect(() => {
    if (onChange) {
      onChange({ keyword: debouncedValue, page: 1 });
    }
  }, [debouncedValue, onChange]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRawValue(e.target.value);
  };

  return (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Tìm kiếm"
        value={rawValue}
        onChange={handleChange}
        className="pl-9"
      />
    </div>
  );
}
