import React, { useState } from "react";
import TextForm from "../../components/TextForm";

export default function Form() {
  const [license, setLicense] = useState("");
  const [plate, setPlate] = useState("");
  const [type, setType] = useState("");
  const [production, setProduction] = useState("");

  return (
    <div className="w-full pt-20 pb-8 px-6">
      <div className="rounded-lg bg-white shadow-md px-8 py-6 space-y-6">
        <p className="font-sans font-semibold text-black text-lg">
          Add New Unit
        </p>
        <TextForm
          label={"License Number"}
          placeholder={"License Number"}
          value={license}
          onChange={(e) => {
            setLicense(e.target.value);
          }}
        />
        <TextForm
          label={"Plate Type"}
          placeholder={"Plate Type"}
          value={plate}
          onChange={(e) => {
            setPlate(e.target.value);
          }}
        />
        <TextForm
          label={"License Type"}
          placeholder={"License type"}
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        />
        <TextForm
          label={"Production Year"}
          placeholder={"Production Year"}
          value={production}
          onChange={(e) => {
            setProduction(e.target.value);
          }}
        />
        {/* Drop File */}
      </div>
    </div>
  );
}
