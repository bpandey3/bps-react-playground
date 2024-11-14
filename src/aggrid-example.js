import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
// Theme
import { ModuleRegistry } from '@ag-grid-community/core';
import AgGridReact from '@ag-grid-community/react';
// React Grid Logic
// import  "ag-grid-community/styles/ag-grid.css";
// Core CSS
import "@ag-grid-community/styles";
import React, { StrictMode, useEffect, useState } from 'react';
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// ModuleRegistry.registerModules([ClientSideRowModelModule]);

// Create new GridExample component
export default function GridExample() {
    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // Column Definitions: Defines & controls grid columns.
    const [colDefs, setColDefs] = useState([]);
    const columns =[        { field: 'userId' },
        { field: 'id' },
        { field: 'body' },
        { field: 'title' }]

    const defaultColDef = {
        flex: 1,
    };

    // useEffect(()=>{

        const setValues = [ { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
        { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
        { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
        { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
        { make: 'Fiat', model: '500', price: 15774, electric: false },
        { make: 'Nissan', model: 'Juke', price: 20675, electric: false },]

    //     setInterval(()=>
    //     {
    //         setRowData(setValues);
    //     })

    // });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log(data);
                setColDefs(columns);
                setRowData(data);
                setLoading(false);

    
            } catch (error) { setError(error); setLoading(false); }

        }

        fetchData();
    }, []);

    if (loading) { return <div>Loading...</div>; } if (error) { return <div>Error: {error.message}</div>; }
    // Container: Defines the grid's theme & dimensions.
    return (
        <div
        className={
            "ag-theme-quartz"
        }
        style={{ width: '100%', height: '100%' }}
        >
            <AgGridReact rowData={rowData} columnDefs={colDefs}/>
        </div>
    );
}



