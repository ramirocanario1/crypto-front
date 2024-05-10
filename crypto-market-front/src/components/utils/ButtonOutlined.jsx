import React from "react";

export default function ButtonOutlined({ children, type = "success" }) {

  let color, border;
  if (type === "success") {
    color = "text-green-500";
    border = "border-green-500";
  } else if (type === "danger") {
    color = "text-red-500";
    border = "border-red-500";
  } else if (type === "warning") {
    color = "text-yellow-500";
    border = "border-yellow-500";
  }

  return (
    <button className={`${color} ${border} border-2 w-full p-2 rounded-md disabled:border-gray-600`}>
      {children}
    </button>
  );

  return <div>ButtonOutlined</div>;
}
