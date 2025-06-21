"use client";

import React from "react";

import "react-quill-new/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const QuillEditor = ({ value, onChange }: Props) => {
  const modules = {
    toolbar: [
      [{ font: [""] }, { size: [] }],
      ["bold", "italic", "underline", "strike"],
      ["link", "image", "video", "formula"],
      [{ script: "sub" }, { script: "super" }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      [{ align: [] }],
      ["blockquote", "code-block"],
      [{ color: [] }, { background: [] }],
      ["clean"],
    ],
  };

  return (
    <div className="min-h-[300px]">
      <ReactQuill
        style={{ height: "230px" }}
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
      />
    </div>
  );
};

export default QuillEditor;
