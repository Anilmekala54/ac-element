"use client"
import React, { useState } from 'react';
import DataGrid, { Column } from 'react-data-grid';


interface Row {
  id: number;
  task: string;
  complete: number;
}

// Define the columns for the grid
const columns: Column<Row>[] = [
  { key: 'id', name: 'ID' },
  { key: 'task', name: 'Task' },
  { key: 'complete', name: 'Complete' },
];

// Initial data for the spreadsheet
const initialRows: Row[] = [
  { id: 1, task: 'Task 1', complete: 0 },
  { id: 2, task: 'Task 2', complete: 0 },
  { id: 3, task: 'Task 3', complete: 0 },
];

const Spreadsheet: React.FC = () => {
  // State to manage the rows in the spreadsheet
  const [rows, setRows] = useState<Row[]>(initialRows);

  // Function to handle row updates
  const onRowsChange = (updatedRows: Row[]) => {
    setRows(updatedRows);
  };

  return (
    <div>
      <h1>My Spreadsheet</h1>
      <DataGrid
        columns={columns}
        rows={rows}
        onRowsChange={onRowsChange}
        rowKeyGetter={(row) => row.id}
      />
    </div>
  );
};

export default Spreadsheet;