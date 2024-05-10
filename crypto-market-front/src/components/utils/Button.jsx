import React from "react";

export default function Button({ children, type = "success" }) {

  let background, hoverBg
  if (type === "success") {
    background = "bg-green-500"
    hoverBg = "hover:bg-green-600"
  } else if (type === "danger") {
    background = "bg-red-500"
    hoverBg = "hover:bg-red-600"
  } else if (type === "warning") {
    background = "bg-yellow-500"
    hoverBg = "hover:bg-yellow-600"
  }

  return (
    <button className={`${background} w-full p-2 rounded-md disabled:bg-gray-600 ${hoverBg} transition-colors`}>
      {children}
    </button>
  );
}
