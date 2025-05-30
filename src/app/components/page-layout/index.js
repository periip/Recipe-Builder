'use client';
import React, { useEffect } from 'react';
import { resetTable, countTable, checkDbConnection, fetchTableData } from '../../api/scripts.js'
import DataTable from '../data-table/index.js';

export default function PageLayout({ title, tableName, attributes, children }) {
    useEffect(() => {
        checkDbConnection();
        fetchTableData(tableName);
    }, [])
    
    return (
        <div>
            <title>Database App</title>
            <div style={{ marginLeft: '15%' }}>
                <h1>Database Connection Status:
                    <span id="dbStatus"> </span>
                    <img id="loadingGif" className="loading-gif" src='/loading_100px.gif' alt="Loading..." />
                </h1>
                <br /><hr /><br />
                <h2>Show { title } table</h2>
                <DataTable attributes={attributes} id="Cheftable" />
                <br /><hr /><br />
                <h2>Reset { title } table</h2>
                <p>If you wish to reset the table press on the reset button. If this is the first time you're running this page, you MUST use reset</p>
                <button id="resetCheftable" onClick={() => resetTable(tableName)}> reset </button> <br />
                <div id="resetResultMsg"></div>
                {children ? <><br /><hr /><br /></> : null}
                    { children }
                <br /><hr /><br />
                <h2>Count the Tuples in { title } Table</h2>
                <button id="countCheftable" onClick={() => countTable(tableName)}> count </button> <br /><br />
                <div id="countResultMsg"></div> <br />
            </div>
        </div>
    )
}