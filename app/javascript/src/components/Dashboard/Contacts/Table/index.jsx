import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { buildContactTableColumnData } from "./utils";

import { CONTACT_DETAILS_DATA } from "../constants";

const Table = ({ showDeleteAlert }) => (
  <div className="notes-table-height w-full">
    <NeetoUITable
      allowRowClick
      columnData={buildContactTableColumnData(showDeleteAlert)}
      rowData={CONTACT_DETAILS_DATA}
      onRowClick={() => {}}
      onRowSelect={() => {}}
    />
  </div>
);

export default Table;
