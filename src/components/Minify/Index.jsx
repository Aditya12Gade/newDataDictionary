import React, { Component } from 'react';
import DataGrid from './components/agGrid';
import { computeColDef } from './helpers/getProcessedData';

class Minify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowData: [
                { id: 1, Catchphrasename: "Tesla", Catchphrase: "Model Y", price: "your Question"},
                { id: 2, Catchphrasename: "Ford", Catchphrase: "F-Series", price: "your Question"},
                { id: 3, Catchphrasename: "Toyota", Catchphrase: "Corolla", price: "your Question"},
            ]
        };

        this.handleDelete = this.handleDelete.bind(this);


        // this.fitColumnSize = this.fitSize.bind(this.state);
        this.fitColumnSize = this.fitColumnSize.bind(this);
    }

    handleDelete(id) {
        this.setState(prevState => ({
            rowData: prevState.rowData.filter(row => row.id !== id)
        }));
    }

    fitColumnSize(params) {
        params.api.sizeColumnsToFit();
    }

    render() {
        const colDefs = computeColDef(this.handleDelete);

        return (
            <DataGrid
                rowData={this.state.rowData}
                columnDefs={colDefs}
                onGridReady={this.fitColumnSize}
            />
        );
    }
}

export default Minify;
