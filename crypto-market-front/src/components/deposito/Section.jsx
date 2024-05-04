import React from "react";

export default function Section({children, className = ""}) {
  return (
    <section className={`rounded-lg bg-gray-700 p-4 shadow-md ${className}`}>
        {children}
    </section>
  );    
}
