import React, { useState } from "react";
import SelectForm from "../../components/SelectForm";
import TextForm from "../../components/TextForm";
import DropFile from "../../components/DropFile";
import { useLocation } from "wouter";

export default function Form() {
  const [name, setName] = useState("");
  const [phone, phoneNumber] = useState("");

  const [idCard, setIdCard] = useState();
  const [driverLicense, setDriverLicense] = useState();
  const [location, setLocation] = useLocation();

  return (
    <div className="w-full pt-20 pb-8 px-6">
      <div className="rounded-lg bg-white shadow-md px-8 py-6 space-y-6">
        <p className="font-sans font-semibold text-black text-lg">
          Add New Unit
        </p>
        <TextForm
          label={"Driver Name"}
          placeholder={"Driver Name"}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextForm
          label={"Phone Number"}
          placeholder={"Phone Number"}
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <DropFile label={"ID CARD"} file={idCard} setFile={setIdCard} />
        <DropFile
          label={"Driver License"}
          file={driverLicense}
          setFile={setDriverLicense}
        />

        <div className="mt-8 flex justify-between items-center">
          <div></div>
          <div className="flex space-x-4 items-center">
            <button
              onClick={() => setLocation("/transporter/drivers")}
              className="rounded-lg bg-red-700 text-white px-5 py-3 text-base font-semibold"
            >
              Cancel
            </button>
            <button className="rounded-lg bg-blue-700 text-white px-5 py-3 text-base font-semibold">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
