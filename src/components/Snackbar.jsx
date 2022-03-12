import React from "react";
import AppContext from "../context/AppContext";
import close from "../assets/closewhite.svg";
import styles from "./Snackbar.module.css";
export default function Snackbar({ open, message, color }) {
  const { setSnack } = React.useContext(AppContext);
  const [openSnack, setOpen] = React.useState(false);

  const handleClose = React.useCallback(
    (bool) => {
      if (bool) {
        setTimeout(() => {
          setSnack(false);
        }, 2000);
      }
    },
    [setSnack]
  );

  const handleCloseClick = React.useCallback(() => {
    setSnack(false);
  }, [setSnack]);

  React.useEffect(() => {
    setOpen(open);
  }, [open]);

  React.useEffect(() => {
    handleClose(openSnack);
  }, [openSnack, handleClose]);

  return (
    <div
      className={`${styles.snackbar} fixed rounded-md py-2 px-3 shadow-2xl h-12 flex justify-between items-center bg-opacity-50`}
      style={{
        visibility: openSnack ? "visible" : "hidden",
        background: color,
      }}
    >
      <p className='text-white cursor-default mb-0'>{message}</p>
      <button
        className={styles.button}
        onClick={() => {
          handleCloseClick(false);
        }}
      >
        <img className='ml-3' src={close} id='close' alt='close' />
      </button>
    </div>
  );
}
