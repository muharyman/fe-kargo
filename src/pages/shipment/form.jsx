import React, { useState, useCallback, useContext } from "react";
import SelectForm from "../../components/SelectForm";
import TextForm from "../../components/TextForm";
import DropFile from "../../components/DropFile";
import { useLocation } from "wouter";
import AppContext from "../../context/AppContext";

export default function Form() {
  const { user } = useContext(AppContext);
  const [location, setLocation] = useLocation();

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const [loadingDate, setLoadingDate] = useState("");
  // const [id, setId] =

  const handleSubmit = useCallback(
    async (origin, destination) => {
      if (origin !== "" && destination !== "") {
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
          Add Shipment
        </p>
        <TextForm
          label={"Origin"}
          placeholder={"Origin"}
          value={origin}
          onChange={(e) => {
            setOrigin(e.target.value);
          }}
        />
        <TextForm
          label={"Destination"}
          placeholder={"Destination"}
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value);
          }}
        />
        <TextForm
          label={"Loading Date"}
          placeholder={"Loading Date"}
          values={loadingDate}
          type={"date"}
          onChange={(e) => {
            setLoadingDate(e.target.value);
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
              onClick={() => handleSubmit(origin, destination)}
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
