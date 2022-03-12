import React, { useState, useCallback, useContext } from "react";
import SelectForm from "../../components/SelectForm";
import TextForm from "../../components/TextForm";
import DropFile from "../../components/DropFile";
import { useLocation } from "wouter";
import AppContext from "../../context/AppContext";

export default function Form() {
  const { user } = useContext(AppContext);
  const [location, setLocation] = useLocation();

  const [driver, setDriver] = useState("");
  const [truck, setTruck] = useState("");

  const [loadingDate, setLoadingDate] = useState("");
  // const [id, setId] =

  const handleSubmit = useCallback(
    async (driver, truck) => {
      if (driver !== "" && truck !== "") {
        let finalStnk = "";
        let finalKir = "";
      } else {
      }
    },
    [user]
  );

  return (
    <div className="w-full pt-20 pb-8 px-6">
      <div className="rounded-lg bg-white shadow-md px-8 py-6 space-y-6">
        <p className="font-sans font-semibold text-black text-lg">
          Allocate Shipment
        </p>
        <TextForm
          label={"Driver"}
          placeholder={"Driver"}
          value={driver}
          onChange={(e) => {
            setDriver(e.target.value);
          }}
        />
        <TextForm
          label={"Truck"}
          placeholder={"Truck"}
          value={truck}
          onChange={(e) => {
            setTruck(e.target.value);
          }}
        />
        <div className="mt-8 flex justify-between items-center">
          <div></div>
          <div className="flex space-x-4 items-center">
            <button
              onClick={() => setLocation("/shipper/shipments")}
              className="rounded-lg bg-red-700 text-white px-5 py-3 text-base font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={() => handleSubmit(driver, truck)}
              className="rounded-lg bg-blue-700 text-white px-5 py-3 text-base font-semibold"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
