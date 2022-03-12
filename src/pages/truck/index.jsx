import React, { useState, useMemo, useCallback } from "react";
import { useLocation } from "wouter";

import Table from "../../components/Table";

import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delete.svg";
import viewIcon from "../../assets/viewId.svg";

export default function Truck() {
  const [location, setLocation] = useLocation();
  const [total, setTotal] = useState(10);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [order, setOrder] = useState({
    by: "licence_number",
    isAsc: false,
  });

  const [viewId, setViewId] = React.useState({});

  const [search, setSearch] = useState("");

  const listLimit = useMemo(() => [5, 10, 20], []);

  const [type, setType] = useState("");
  const [data, setData] = useState([
    {
      license_number: "asdasdada",
      truck_type: "asdasdsadasd",
      plate_type: "Yellow",
      production_year: "asdada",
    },
    {
      license_number: "nasdasdksad",
      truck_type: "njkljnk",
      plate_type: "Yellow",
      production_year: "kmlnnjlknkl",
    },
    {
      license_number: "t787iuda",
      truck_type: "bnmmv",
      plate_type: "Yellow",
      production_year: "0909",
    },
    {
      license_number: "asdasdada",
      truck_type: "asdasdsadasd",
      plate_type: "Yellow",
      production_year: "asdada",
    },
    {
      license_number: "nasdasdksad",
      truck_type: "njkljnk",
      plate_type: "Yellow",
      production_year: "kmlnnjlknkl",
    },
  ]);
  const listHead = useMemo(
    () => [
      {
        view: "License Number",
        value: "license_number",
        type: "text",
      },
      {
        view: "Truck Type",
        value: "truck_type",
        type: "text",
      },
      {
        view: "Plate Type",
        value: "plate_type",
        type: "text",
      },
      {
        view: "Production Year",
        value: "production_year",
        type: "text",
      },
    ],
    []
  );

  const handleViewId = useCallback((e) => {}, []);

  const handleOrder = useCallback((e) => {
    setOrder(e);
  }, []);

  const handleEdit = useCallback(
    (e) => {
      setLocation(`/transporter/trucks/form?id=${e}`);
    },
    [setLocation]
  );

  const handleDelete = useCallback((e) => {
    setDeleteGaleri(e);
  }, []);

  const listAction = useMemo(() => {
    return [
      {
        icon: viewIcon,
        onClick: handleViewId,
      },
      {
        icon: editIcon,
        onClick: handleEdit,
      },
      {
        icon: deleteIcon,
        onClick: handleDelete,
      },
    ];
  }, [handleEdit, handleDelete]);

  return (
    <div className="min-h-screen w-full pt-20 pb-8 px-6">
      <p className="font-sans font-semibold text-main-black text-lg">Trucks</p>

      <div className="mt-4 flex justify-between items-center w-full">
        <select
          className="rounded-md px-4 py-3"
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          {["Truck Type", "Tronton", "Container", "CDE"].map((item, i) => (
            <option key={i} className="p-2 font-sans text-sm" value={item}>
              {item}
            </option>
          ))}
        </select>
        <div className="flex space-x-4 items-center">
          <button
            onClick={() => setLocation(`/transporter/trucks/form`)}
            className="bg-blue-800 rounded-xl focus:outline-none hover:opacity-80 text-white text-base font-semibold font-sans px-5 py-3"
          >
            Add Trucks
          </button>
          <input
            placeholder="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="border border-gray-200 rounded-xl px-5 py-3 text-base bg-white text-gray-500"
          />
        </div>
      </div>

      <div className="mt-8 ">
        <Table
          head={listHead}
          rows={data}
          action={listAction}
          getPageSize={setLimit}
          listlimit={listLimit}
          total={total}
          currentPage={page}
          pageSize={limit}
          getCurrent={setPage}
          getOrder={handleOrder}
        />
      </div>
    </div>
  );
}
