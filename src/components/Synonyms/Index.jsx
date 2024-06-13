import React, { Component } from 'react';
import { Input, Row, Col, Button, Tag } from 'antd';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.css';
import GetProcessedData from '../Synonyms/helpers/GetProcessedData';

class Synonyms extends Component {

    fitColumnSize = (params) => {
        params.api.sizeColumnsToFit();
    };

    render() {
        return (
            <GetProcessedData>
                {({ rowData, inputs, addRow, handleInputChange, handleKeyPress, colDefs }) => (
                    <div className="ag-theme-balham" style={{ height: 500 }}>
                        <Row gutter={[16, 16]}>
                            <Col>
                                <Input
                                    placeholder="Input word type"
                                    value={inputs.Word}
                                    onChange={e => handleInputChange("Word", e.target.value)}
                                    onKeyPress={handleKeyPress}
                                />
                            </Col>
                            <Col>
                                <Input
                                    placeholder="Synonyms"
                                    value={inputs.Synonyms}
                                    onChange={e => handleInputChange("Synonyms", e.target.value)}
                                    onKeyPress={handleKeyPress}
                                />
                            </Col>
                            <Col>
                                <Button onClick={addRow} type="primary">Add Row</Button>
                            </Col>
                        </Row>

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <AgGridReact
                            rowData={rowData}
                            columnDefs={colDefs}
                            defaultColDef={{ filter: true, sortable: true, floatingFilter: true }}
                            onGridReady={this.fitColumnSize}
                        />
                    </div>
                )}
            </GetProcessedData>
            
        );
    }
}

export default Synonyms;
