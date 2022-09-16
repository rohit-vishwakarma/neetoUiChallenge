import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { CONTACT_DETAILS_COLUMN_DATA } from "./ColumnData";

import { CONTACT_DETAILS_DATA } from "../constants";

const Table = ({ showDeleteAlert }) => (
  <div className="notes-table-height w-full">
    <NeetoUITable
      allowRowClick
      columnData={CONTACT_DETAILS_COLUMN_DATA(showDeleteAlert)}
      rowData={CONTACT_DETAILS_DATA}
      onRowClick={() => {}}
      onRowSelect={() => {}}
    />
  </div>
);

export default Table;
