import React, { useState, useCallback, useContext } from "react";
import SelectForm from "../../components/SelectForm";
import TextForm from "../../components/TextForm";
import DropFile from "../../components/DropFile";
import { useLocation } from "wouter";
import AppContext from "../../context/AppContext";

export default function Form() {
  const { user, setSnack } = useContext(AppContext);
  const [location, setLocation] = useLocation();
  const [license, setLicense] = useState("");
  const [plate, setPlate] = useState("");
  const [type, setType] = useState("");
  const [production, setProduction] = useState("");

  const [stnk, setStnk] = useState();
  const [kir, setKir] = useState();

  function isFile(input) {
    if ("File" in window && input instanceof File) return true;
    else return false;
  }

  const handleSubmit = useCallback(
    async (license, plate, type, production, stnk, kir) => {
      try {
        console.log({ license, plate, type, production });
        if (
          license !== "" &&
          plate !== "" &&
          type !== "" &&
          production !== ""
        ) {
          let finalStnk = "";
          let finalKir = "";
          const url2 =
            "https://z0lp4q2g9k.execute-api.ap-southeast-1.amazonaws.com/dev/irc/upload-file";
          if (isFile(stnk)) {
            const bodyStnk = new FormData();

            bodyStnk.append("file", stnk);
            const uploadStnk = await fetch(url2, {
              method: "POST",
              body: bodyStnk,
            });

            const resStnk = await uploadStnk.json();
            finalStnk = resStnk.data;
          }

          if (isFile(kir)) {
            const bodyKir = new FormData();

            bodyKir.append("file", kir);
            const uploadKir = await fetch(url2, {
              method: "POST",
              body: bodyKir,
            });

            const resKir = await uploadKir.json();
            finalKir = resKir.data;
          }

          let finalData = {
            license_number: license,
            truck_type: type,
            plate_type: plate,
            production_year: production,
            stnk: finalStnk,
            kir: finalKir,
          };

          console.log({ finalData });

          const res = await fetch("/api" + "/trucks", {
            method: "POST",
            body: JSON.stringify(finalData),
          });

          const response = await res.json();
          if (response.id) {
            setSnack("Berhasil Membuat Truck", "success");
            setLocation("/transporter/trucks");
          }
        } else {
          setSnack("Periksa Kembali data", "error");
        }
      } catch (err) {
        console.log({ err });
        setSnack("Periksa Kembali data", "error");
      }
    },
    [user]
  );

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
        <SelectForm
          label={"Plate Type"}
          placeholder={"Plate Type"}
          values={["Yellow", "Black"]}
          value={plate}
          onChange={(e) => {
            setPlate(e.target.value);
          }}
        />
        <SelectForm
          label={"License Type"}
          placeholder={"License type"}
          values={["Tronton", "Container", "CDE"]}
          value={license}
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
        <DropFile label={"STNK"} file={stnk} setFile={setStnk} />
        <DropFile label={"KIR"} file={kir} setFile={setKir} />

        <div className="mt-8 flex justify-between items-center">
          <div></div>
          <div className="flex space-x-4 items-center">
            <button
              onClick={() => setLocation("/transporter/trucks")}
              className="rounded-lg bg-red-700 text-white px-5 py-3 text-base font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={() =>
                handleSubmit(license, plate, type, production, stnk, kir)
              }
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
