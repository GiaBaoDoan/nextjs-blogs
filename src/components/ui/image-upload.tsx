"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { convertToBase64 } from "@/lib/file";
import { Input } from "@/components/ui/input";
import BlogAvatar from "@/components/blogs/BlogAvatar";
import { cn } from "@/lib/utils";

type ImageUploadProps = {
  value?: string;
  onChange: (val: string) => void;
  className?: string;
};

export default function ImageUpload({
  value,
  onChange,
  className,
}: ImageUploadProps) {
  const [preview, setPreview] = useState<string | undefined>(value);

  useEffect(() => {
    setPreview(value);
  }, [value]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const base64 = await convertToBase64(file);
      onChange(base64);
    }
  };

  return (
    <div className={cn("space-y-2", className)}>
      {preview ? (
        <Image
          src={preview}
          alt="Thumbnail"
          width={150}
          height={150}
          className="object-cover w-30 h-16 rounded"
        />
      ) : (
        <BlogAvatar />
      )}
      <Input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
}
