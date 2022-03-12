import React from "react";
import SelectItem from "./SelectItem";

import styles from "./SelectLimit.module.css";

import down from "../assets/down.svg";

export default function MySelect({
  value,
  placeholder,
  getValue,
  name,
  items,
  isMinWidth,
}) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = React.useCallback(
    (e, bool) => {
      if (
        e.target.id === name + "container" ||
        e.target.id === name + "text-container" ||
        e.target.id === name + "icon-container"
      ) {
        setOpen(bool);
      }
    },
    [name]
  );

  const handleClose = React.useCallback((bool) => {
    setOpen(bool);
  }, []);

  const handleClick = React.useCallback(
    (value) => {
      getValue(value);
      setOpen(false);
    },
    [getValue]
  );

  return (
    <div
      className={`${styles.select} mx-1 px-3 py-3 border flex justify-between items-center rounded-md cursor-pointer relative h-10`}
      id={name + "container"}
      onClick={(e) => {
        handleOpen(e, true);
      }}
    >
      <p
        className="text-xs font-sans text-main-black cursor-pointer"
        id={name + "text-container"}
      >
        {value ? value : placeholder}
      </p>
      <img
        src={down}
        alt="down"
        className="ml-2 cursor-pointer"
        id={name + "icon-container"}
      />
      {open && (
        <div
          className={`${styles.popover} absolute rounded-md z-40 py-2 -mt-16 left-0`}
          id="popover"
        >
          {items.map((item) => (
            <SelectItem
              key={item}
              value={item}
              onClick={handleClick}
              isMinWidth={isMinWidth}
            />
          ))}
        </div>
      )}
      {open && (
        <div
          className="w-screen h-screen top-0 left-0 bg-transparent fixed z-30"
          onClick={() => {
            handleClose(false);
          }}
        ></div>
      )}
    </div>
  );
}
