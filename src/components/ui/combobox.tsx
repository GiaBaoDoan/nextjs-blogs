"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Tag } from "@/types/tag.type";

interface MultiSelectComboboxProps {
  options: Tag[];
  selected: string[];
  onChange: (values: string[]) => void;
}

export function MultiSelectCombobox({
  options,
  selected,
  onChange,
}: MultiSelectComboboxProps) {
  const [open, setOpen] = React.useState(false);

  const toggleValue = (value: string) => {
    const newValues = selected?.includes(value)
      ? selected?.filter((val) => val !== value)
      : [...selected, value];
    onChange(newValues);
  };

  const selectedLabels = options
    .filter((o) => selected?.includes(o._id))
    .map((o) => o.name);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "flex h-auto",
            selectedLabels.length > 0 ? "justify-between" : "justify-end"
          )}
        >
          {selectedLabels.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {selectedLabels.map((name) => (
                <Badge variant="secondary" key={name}>
                  #{name}
                </Badge>
              ))}
            </div>
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50 justify-end" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option._id}
                  onSelect={() => toggleValue(option._id)}
                >
                  <div className="flex justify-between items-center w-full">
                    <span>{option.name}</span>
                    {selected.includes(option._id) && (
                      <Check className="h-4 w-4 opacity-100" />
                    )}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
