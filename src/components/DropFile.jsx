import React from "react";

import { useDropzone } from "react-dropzone";

export default function DropFile({ label, file, setFile }) {
  const onDrop = React.useCallback(
    (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
    [setFile]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  function isFile(input) {
    if ("File" in window && input instanceof File) return true;
    else return false;
  }

  return (
    <div className="flex space-x-3 items-center">
      <label className="w-1/6 font-sans text-sm text-black font-semibold">
        {label}
      </label>
      {file ? (
        <div className="w-4/6 rounded-full relative flex items-center space-x-3">
          <p className={"text-black font-normal text-xs"}>{file.name}</p>
          <button
            onClick={() => setFile()}
            className="text-red-700 font-semibold text-base cursor-pointer"
          >
            X
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-center" {...getRootProps()}>
          <input {...getInputProps()} />
          <button className="rounded-xl font-sans px-5 py-3 bg-[#1294F2] text-white text-base font-semibold hover:opacity-80 focus:outline-none">
            Choose Files
          </button>
        </div>
      )}
    </div>
  );
}
