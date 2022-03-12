import React from "react";

export default function SelectItem({ value, onClick }) {
  let show = value;
  if (typeof value === "string") {
    show = value.replaceAll("_", " ");
  }
  const handleClick = React.useCallback(() => {
    onClick(value);
  }, [onClick, value]);

  return (
    <div
      className="w-full px-4 py-2 md:py-3 hover:bg-gray-2 hover:bg-opacity-25 flex justify-center items-center cursor-pointer"
      onClick={handleClick}
    >
      <p className="text-xs text-main-black cursor-pointer text-center capitalize">
        {show}
      </p>
    </div>
  );
}
