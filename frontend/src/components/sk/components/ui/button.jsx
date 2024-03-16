/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Button({ children, color, ...attributes }) {
  return (
    <button
      {...attributes}
      className={`py-3 px-6 capitalize ${"bg-[#fff76a]"} text-xl text-black rounded-lg`}
    >
      {children}
    </button>
  );
}
