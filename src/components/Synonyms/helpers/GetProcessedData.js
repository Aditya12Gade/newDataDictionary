import React, { Component } from 'react';
import { Tag } from 'antd';

class GetProcessedData extends Component {
    state = {
        rowData: [],
        inputs: { Word: "", Category: "Order by", Synonyms: "" }
    };

    addRow = () => {
        const { rowData, inputs } = this.state;
        const existingRow = rowData.find(row => row.Word === inputs.Word && row.Category === inputs.Category);
        if (existingRow) {
            existingRow.Synonyms = existingRow.Synonyms ? `${existingRow.Synonyms}, ${inputs.Synonyms}` : inputs.Synonyms;
            this.setState({ rowData: [...rowData] });
        } else {
            this.setState(prevState => ({
                rowData: [...prevState.rowData, { ...inputs }]
            }));
        }
        this.setState({ inputs: { Word: "", Category: "Order by", Synonyms: "" } });
    };

    removeSynonym = (rowIndex, synonym) => {
        this.setState(prevState => {
            const updatedRowData = [...prevState.rowData];
            const row = updatedRowData[rowIndex];
            row.Synonyms = row.Synonyms.split(', ').filter(s => s !== synonym).join(', ');
            return { rowData: updatedRowData };
        });
    };

    handleInputChange = (field, value) => {
        this.setState(prevState => ({
            inputs: {
                ...prevState.inputs,
                [field]: value
            }
        }));
    };

    
   

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.addRow();
        }
    };

    colDefs = [
        { field: "Word" },
        { field: "Category" },
        {
            field: "Synonyms",
            floatingFilter: false,
            cellRenderer: params => {
                if (params.value) {
                    return params.value.split(', ').map((synonym, index) => (
                        <Tag
                            key={index}
                            closable={true}
                            onClose={(e) => {
                                e.preventDefault();
                                this.removeSynonym(params.node.rowIndex, synonym);
                            }}
                        >
                            {synonym}
                        </Tag>
                    ));
                } else {
                    return null;
                }
            }
        }
    ];

    render() {
        return this.props.children({
            rowData: this.state.rowData,
            inputs: this.state.inputs,
            addRow: this.addRow,
            handleInputChange: this.handleInputChange,
            handleKeyPress: this.handleKeyPress,
            colDefs: this.colDefs
        });
    }
}

export default GetProcessedData;
