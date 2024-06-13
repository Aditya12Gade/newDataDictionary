import { Button, Popconfirm } from 'antd';

export const computeColDef = (handleDelete) => {
    const colDefs = [];
    const data = [
        { field: "Catchphrasename", headerName: "CatchPhrase Name" },
        { field: "Catchphrase", headerName: "CatchPhrase" },
        { field: "price", headerName: "Questions" },
        {
            field: "Action",
            headerName: "Action",
            cellRenderer: (params) => (
                <Popconfirm
                    title="Delete the task"
                    description="Are you sure to delete this task?"
                    okText="Yes"
                    cancelText="No"
                    onConfirm={() => handleDelete(params.data.id)}
                >
                    <Button>Delete</Button>
                </Popconfirm>
            )
        }
    ];

    // const addNewData= (data) => {
    //     const data = [...baseData, ...additionalData];
    //     Data.forEach(item => colDefs.push(item));
    // };

    data.forEach(item => {
        colDefs.push(item);
    });

    return colDefs;
};

// const colData = {
//    'data-zero':{
//       width : 100,
//       headerName:'Test column',
//       type:'normal'
//    },
//    'popup':{
//       headerName:'test 01',
//       type:'popupContainer'
//    },
//    'toggle': {
//     headerName:'toggle',
//     t

//    }
// }

// export const colDef = () =>{
//    const colDef = {};

//    Object.entries(colData).forEach((ent) => {
//         const key = ent[0];
//         const value = ent[1];
//         let finalOjb = {
//             fieled : key
//         }

//         // const key  = ent [0]
//         // const value = ent[1]

//         Object.entries(value).map(itm =>{
//             if(itm[0] === 'type'){
//                 switch(itm[1]){
//                     case 1 : 'popupContainer';
//                      finalOjb['render'] = <PopupComponent
//                 }
//             }
//         }) 

//         Object.entries


//         colDef.push(finalOjb)

//    })

//    return colDef;
// }