import { useState, useEffect } from 'react';
import { Modal, Button, Radio } from 'antd';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.css';

const Preferences = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedRowId, setSelectedRowId] = useState(null);
    const [rowData, setRowData] = useState([]);
    const [filteredData, setFilteredData] = useState(null);

    const dataDictionary = [
        {
            "column_name": "Returned",
            "column_alias": "Returned",
            "column_type": "Dimension",
            "unit": null,
            "formula": null,
            "column_table_name": "a908596b89506d466f225125ea05d8a3",
            "column_is_active": true,
            "sch_schema_id": 24107,
            "column_is_date": false,
            "column_default_order": "NA",
            "default_agg_type": "NA",
            "column_table_alias": "Returns",
            "enable_for_filter": false,
            "what_if_max": null,
            "what_if_min": null,
            "what_if_step": null,
            "column_custom_datatype": null,
            "unit_placement": "suffix",
            "sch_metadata_id": 10382797,
            "column_is_pre_calculated": false,
            "column_datatype_name": "varchar",
            "is_auto_generated": false,
            "lrf_query_lang_id": 1,
            "date_format": null,
            "color": "#fffeee",
            "thousand_separator": true,
            "formatter_text_position": "Left",
            "precision": 2,
            "formatting_type": "123,456,789",
            "abbreviation": ["Numeric", "billions"]
        },
        {
            "column_name": "Ship_Date",
            "column_alias": "Ship Date",
            "column_type": "Dimension",
            "unit": null,
            "formula": null,
            "column_table_name": "d5091672c28afadb8278c2032eb2ad71",
            "column_is_active": true,
            "sch_schema_id": 24107,
            "column_is_date": true,
            "column_default_order": "ASC",
            "default_agg_type": "NA",
            "column_table_alias": "Orders",
            "enable_for_filter": false,
            "what_if_max": null,
            "what_if_min": null,
            "what_if_step": null,
            "column_custom_datatype": null,
            "unit_placement": "suffix",
            "sch_metadata_id": 10382802,
            "column_is_pre_calculated": false,
            "column_datatype_name": "timestamp",
            "is_auto_generated": false,
            "lrf_query_lang_id": 1,
            "date_format": null,
            "unit": "-"
        }
    ]

    useEffect(() => {

        const filteredRows = dataDictionary.filter(row => row.column_datatype_name === "timestamp");
        const transformedRows = filteredRows.map(row => ({
            "Default Date": "hello",
            "Costumized Date": row.column_alias,
            "entity": row.column_table_alias,
            "sch_metadata_id": row.sch_metadata_id,
        }));
        setRowData(transformedRows);


        const defaultRow = transformedRows.find(row => row["Costumized Date"] === "Order Date");
        if (defaultRow) {
            setSelectedRowId(defaultRow.sch_metadata_id);
            setFilteredData([defaultRow]);
        }
    }, []);

    const modalColDefs = [
        {
            headerName: "Default Date",
            field: "Default Date",
            cellRenderer: params => (
                <div style={{ textAlign: 'center' }}>
                    <Radio
                        checked={params.data.sch_metadata_id === selectedRowId}
                        onChange={() => handleRadioChange(params.data.sch_metadata_id)}
                    />
                </div>
            ),
            width: 140,
            resizable: false
        },
        { field: "Costumized Date", width: 255, resizable: false },
        { field: "entity", width: 255, resizable: false },
    ];

    const filteredColDefs = [
        { field: "Costumized Date" },
        { field: "entity" },
    ];

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        const selectedRow = rowData.find(row => row.sch_metadata_id === selectedRowId);
        setFilteredData([selectedRow]);
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleRadioChange = (id) => {
        setSelectedRowId(id);
    };

    const fitColumnSize = (params) => params.api.sizeColumnsToFit();

    return (
        <div>
            {!filteredData && (
                <Button type="primary" onClick={showModal} style={{ marginBottom: 20 }}>
                    + Change default date
                </Button>
            )}
            <Modal
                title=""
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={700}
                closeIcon={false}
            >
                <div className="ag-theme-balham" style={{ height: 110, width: '100%' }}>
                    <AgGridReact
                        rowData={rowData}
                        columnDefs={modalColDefs}
                        defaultColDef={{ sortable: true, resizable: false }}
                        onGridReady={fitColumnSize}
                    />
                </div>
            </Modal>

            {filteredData && (
                <div style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
                    <div className="ag-theme-balham" style={{ flexGrow: 1, height: 350 }}>
                        <AgGridReact
                            rowData={filteredData}
                            columnDefs={filteredColDefs}
                            defaultColDef={{ sortable: true }}
                            onGridReady={fitColumnSize}
                        />
                    </div>
                    <Button type="primary" onClick={showModal} style={{ marginLeft: 20, marginBottom: 80 }}>
                        + Change default date
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Preferences;

