import React, { useState, useMemo, useCallback } from "react";

import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delete.svg";
import { useLocation } from "wouter";
import Table from "../../components/Table";

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

  const [search, setSearch] = useState("");

  const listLimit = useMemo(() => [5, 10, 20], []);

  const [type, setType] = useState("");
  const [viewId, setViewId] = React.useState({});
  const [data, setData] = useState([
    {
      id: 1,
      driver_name: "asdasdada",
      phone_number: "asdasdsadasd",
      created_at: "asdada",
      status: "Active",
    },
    {
      id: 2,
      driver_name: "nasdasdksad",
      phone_number: "njkljnk",
      created_at: "kmlnnjlknkl",
      status: "Inactive",
    },
    {
      id: 3,
      driver_name: "t787iuda",
      phone_number: "bnmmv",
      created_at: "0909",
      status: "Active",
    },
    {
      id: 4,
      driver_name: "asdasdada",
      phone_number: "asdasdsadasd",
      created_at: "asdada",
      status: "Inactive",
    },
    {
      id: 5,
      driver_name: "nasdasdksad",
      phone_number: "njkljnk",
      created_at: "kmlnnjlknkl",
      status: "Active",
    },
  ]);
  const listHead = useMemo(
    () => [
      {
        view: "Driver Name",
        value: "driver_name",
        type: "text",
      },
      {
        view: "Phone Number",
        value: "phone_number",
        type: "text",
      },
      {
        view: "Created At",
        value: "created_at",
        type: "text",
      },
      {
        view: "Status",
        value: "status",
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
      setLocation(`/transporter/drivers/form?id=${e}`);
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
      <p className="font-sans font-semibold text-black text-lg">Driver</p>

      <div className="mt-4 flex justify-between items-center w-full">
        <div></div>
        <div className="flex space-x-4 items-center">
          <button className="bg-blue-800 rounded-xl focus:outline-none hover:opacity-80 text-white text-base font-semibold font-sans px-5 py-3">
            Add Driver
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
