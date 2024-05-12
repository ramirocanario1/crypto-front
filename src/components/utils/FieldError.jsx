import React from "react";
import { MdError } from "react-icons/md";

export default function FieldError({ children, className }) {
  return (
    <p className={`text-red-500  bg-red-100 flex items-center gap-2 p-2 mt-2 rounded ${className}`}>
      <MdError className="flex-shrink-0" /> {children}
    </p>
  );
}
