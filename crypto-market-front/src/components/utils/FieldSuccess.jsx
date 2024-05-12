import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function FieldSuccess({ children, className }) {
  return (
    <p className={`text-green-500  bg-green-100 flex items-center gap-2 p-2 mt-2 rounded ${className}`}>
      <FaCheck className="flex-shrink-0" /> {children}
    </p>
  );
}
