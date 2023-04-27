import React from "react";
import { useEffect, useRef } from "react";

const DataTable = ({ tableData }) => {
  const $ = require("jquery");
  $.DataTable = require("datatables.net");
  const tableRef = useRef();

  const col = Object.keys(tableData[0]);

  useEffect(() => {
    const table = $(`#${"tableName"}`).DataTable({
      data: tableData,
      columns: col.map((item) => {
        return {
          data: item,
          title: item.charAt(0).toUpperCase() + item.slice(1),
        };
      }),
      destroy: true,
      searching: false,
    });
    return function () {
      // console.log("Table destroyed");
      table.destroy();
    };
  }, [tableData, col, $]);

  return (
    <div>
      <table
        className="display cell-border"
        width="100%"
        id={"tableName"}
        ref={tableRef}
      ></table>
    </div>
  );
};

export default DataTable;
