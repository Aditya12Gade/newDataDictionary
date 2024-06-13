
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const DataGrid = ({ rowData, columnDefs,  onGridReady }) => (
    <div className="ag-theme-alpine" style={{ height: 400, width: 1100 }}>
        <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            onGridReady={onGridReady}
            
        />
    </div>
);

export default DataGrid;
