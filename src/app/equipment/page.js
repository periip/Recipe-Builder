'use client';
import { selectEquipmentTable } from "../api/scripts";
import PageLayout from "../components/page-layout";
import { useState } from "react";

const title = "Equipment";
const tableName = "Equipment";
const attributes = ["Equipment Name", "Equipment Material"];
export default function EquipmentPage() {
    const [selectedFilter, setSelectedFilter] = useState("both");
    return (
        <PageLayout title={title} tableName={tableName} attributes={attributes} >
            <h2>Select Values from {title} Table</h2>
            <p>Input text to retrieve matching values. The values are case sensitive and if you enter in the wrong case, the filters will not do anything. If you want to input multiple values, separate them by a comma.</p>
            <form onSubmit={e => selectEquipmentTable(e, tableName)}>
                <div>Please select your preferred filter method (having to match both or only one of the attributes):</div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <select onChange={e => setSelectedFilter(e.target.value)}>
                        <option value="both">Both</option>
                        <option value="individual">Individually</option>
                    </select>    
                </div>
                <br />

                Equipment Name: <input type="text" placeholder="Enter Name" /> <br /><br />
                Equipment Material: <input type="text" placeholder="Enter Material" /> <br /><br />
                <button type="submit"> Apply </button> <br />
            </form>
            <div id="selectResultMsg"></div>
        </PageLayout>
    )
}