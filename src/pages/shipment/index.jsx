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
      shipment: "asdasdasdasd",
      license: "sadavvvvdvdvd",
      driver_name: "asdasdada",
      origin: "Bandung",
      destination: "Bogor",
      loading_date: "17 Oktober 2019",
      status: "On Going",
    },
    {
      id: 2,
      shipment: "asdasdasdasd",
      license: "sadavvvvdvdvd",
      driver_name: "nasdasdksad",
      origin: "Bandung",
      destination: "Bogor",
      loading_date: "17 Oktober 2019",
      status: "On Going",
    },
    {
      id: 3,
      shipment: "asdasdasdasd",
      license: "sadavvvvdvdvd",
      driver_name: "t787iuda",
      origin: "Bandung",
      destination: "Bogor",
      loading_date: "17 Oktober 2019",
      status: "On Going",
    },
    {
      id: 4,
      shipment: "asdasdasdasd",
      license: "sadavvvvdvdvd",
      driver_name: "asdasdada",
      origin: "Bandung",
      destination: "Bogor",
      loading_date: "17 Oktober 2019",
      status: "On Going",
    },
    {
      id: 5,
      shipment: "asdasdasdasd",
      license: "sadavvvvdvdvd",
      driver_name: "nasdasdksad",
      origin: "Bandung",
      destination: "Bogor",
      loading_date: "17 Oktober 2019",
      status: "On Going",
    },
  ]);
  const listHead = useMemo(
    () => [
      {
        view: "Shipment",
        value: "shipment",
        type: "text",
      },
      {
        view: "License",
        value: "licence",
        type: "text",
      },
      {
        view: "Driver Name",
        value: "driver_name",
        type: "text",
      },
      {
        view: "Origin",
        value: "origin",
        type: "text",
      },
      {
        view: "Destination",
        value: "destination",
        type: "text",
      },
      {
        view: "Loading Date",
        value: "loading_date",
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
      <p className="font-sans font-semibold text-main-black text-lg">
        Shipment
      </p>

      <div className="mt-4 flex justify-between items-center w-full">
        <div></div>
        <div className="flex space-x-4 items-center">
          <button className="bg-blue-800 rounded-xl focus:outline-none hover:opacity-80 text-white text-base font-semibold font-sans px-5 py-3">
            Add Shipment
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
