import React from "react";
import styles from "./Table.module.css";
import Pagination from "./Pagination";
import SelectLimit from "./SelectLimit";

import down from "../assets/down.svg";

export default function Table({
  head,
  rows,
  action,
  total,
  currentPage,
  pageSize,
  getCurrent,
  getPageSize,
  listlimit,
  getOrder,
}) {
  const [isAsc, setisAsc] = React.useState(true);
  const [order, setOrder] = React.useState("");

  const handleOrder = React.useCallback(
    (text, bool) => {
      setOrder(text);
      setisAsc(!bool);
      getOrder({ by: text, isAsc: !bool });
    },
    [setOrder, getOrder]
  );

  return (
    <div className="w-full relative border border-color-gray-200 shadow-table rounded-lg">
      <div
        className={`${styles.parentTable} relative overflow-y-scroll rounded-t-lg`}
      >
        <table className="table-auto w-full bg-transparent">
          <thead>
            <tr className="sticky top-0">
              {head.map((item) => (
                <th
                  key={item.value}
                  className="text-left text-base font-sans text-main-black px-4 min-w-32 max-w-96 h-16 font-medium cursor-pointer sticky top-0 bg-white"
                >
                  <div
                    className={`flex items-center justify-between h-full ${styles.header}`}
                    onClick={() => {
                      handleOrder(item.value, isAsc);
                    }}
                  >
                    <p>{item.view}</p>
                    <img
                      className={`transform ${
                        item.value === order && isAsc
                          ? "-rotate-180"
                          : "rotate-0"
                      } transition-transform duration-300 `}
                      src={down}
                      alt="down"
                    />
                  </div>
                </th>
              ))}
              <th className="text-left text-base font-sans text-main-black px-4 h-16 font-medium cursor-pointer sticky top-0 bg-white">
                <div className={`flex items-center justify-start h-full`}>
                  <p>Action</p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item, i) => (
              <tr key={item.uuid}>
                {Object.keys(item).map((key) =>
                  key !== "uuid" && key !== "id" ? (
                    <td
                      key={key}
                      className={`text-left text-sm font-sans text-main-black font-normal px-4 h-20 ${
                        i % 2 === 1 ? "bg-white" : "bg-transparent"
                      }`}
                    >
                      <div className="flex items-center justify-between h-full">
                        <p className="text-sm font-sans text-main-black font-normal text-left">
                          {item[key]}
                        </p>
                      </div>
                    </td>
                  ) : null
                )}
                <td
                  className={`text-left text-sm font-sans text-main-black font-normal px-4 h-20 ${
                    i % 2 === 1 ? "bg-white" : "bg-transparent"
                  }`}
                >
                  <div className="flex items-center space-x-2 h-full">
                    {action.map((actionItem, i) => (
                      <button
                        key={i}
                        className="focus:outline-none bg-button-disabled rounded-md h-12 w-12 p-2 hover:opacity-75"
                        onClick={() => {
                          actionItem.onClick(item.uuid);
                        }}
                      >
                        <img
                          src={actionItem.icon}
                          alt="menu"
                          className="cursor-pointer"
                        />
                      </button>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {rows.length ? (
        <div className="w-full flex items-center justify-between h-16 relative overflow-y-visible bg-white">
          <div className="w-full flex items-center justify-between px-10">
            <div className="flex items-center space-x-2 ">
              <p className="text-main-black font-sans text-xs">Menampilkan</p>
              <div className="inline-block px-1 ">
                <SelectLimit
                  value={pageSize}
                  getValue={getPageSize}
                  name={"limit"}
                  items={listlimit}
                />
              </div>
              <p className="text-main-black font-sans text-xs">
                dari {total} baris
              </p>
            </div>
            <Pagination
              total={total}
              currentPage={currentPage}
              pageSize={pageSize}
              maxPages={5}
              getCurrent={getCurrent}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
