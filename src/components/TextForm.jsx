import React from "react";

const TextForm = React.forwardRef((props, ref) => {
  return (
    <div className="flex space-x-3 items-center w-full">
      <p className="font-semibold w-1/6 text-sm font-sans text-main-black capitalize">
        {props.label}
      </p>
      <input
        ref={ref}
        type={props.type ? props.type : "text"}
        className="focus:outline-none border w-4/6 border-main-card text-gray-500 text-xs px-2 py-3 rounded-md"
        placeholder={props.placeholder}
        onKeyDown={props.onKeyDown}
        value={props.value}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
      />
    </div>
  );
});

TextForm.displayName = "TextForm";

export default TextForm;
