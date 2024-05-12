import React from "react";

export default function Button({ children, type = "success", className, disabled }) {
  let background, hoverBg;
  if (type === "success") {
    background = "bg-green-500";
    hoverBg = "hover:bg-green-600";
  } else if (type === "danger") {
    background = "bg-red-500";
    hoverBg = "hover:bg-red-600";
  } else if (type === "warning") {
    background = "bg-yellow-500";
    hoverBg = "hover:bg-yellow-600";
  }

  return (
    <button
      className={`${background} text-center w-full p-2 rounded-md disabled:bg-gray-700 ${hoverBg} transition-colors ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
