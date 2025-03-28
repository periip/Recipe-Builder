'use client';
import React, { useState } from "react";
import PageLayout from "../components/page-layout";
import { projectMenuItemTable, groupbyCuisineAvgPrice } from "../api/scripts";

const title = "Menu Items";
const tableName = "MenuItem";
const attributes = ["menu_item_name", "cuisine", "price", "dietary_restrictions", "license_requirement", "isGourmet"];
export default function MenuItemPage() {
    const [isAllSelected, setIsAllSelected] = useState(false);
    const [selectedAttributes, setSelectedAttributes] = useState([]);

    const handleClick = (e) => {
        if (e.target.value === "all") {
            setIsAllSelected(e.target.checked);
            setSelectedAttributes(e.target.checked ? attributes : []);
        } else {
            if (e.target.checked) {
                setSelectedAttributes([...selectedAttributes, e.target.value]);
                if (selectedAttributes.length + 1 === attributes.length) {
                    setIsAllSelected(true);
                }
            } else {
                setSelectedAttributes(selectedAttributes.filter(attr => attr !== e.target.value));
                setIsAllSelected(false);
            }
        }
    }

    return (
        <PageLayout title={title} tableName={tableName} attributes={attributes} >
            <h2>Filter columns in {title} Table</h2>
            <p>Choose which columns you want to view in the table.</p>
            <form onSubmit={(e) => projectMenuItemTable(e, selectedAttributes)}>
                <div>
                    <input type="checkbox" id="all" name="all" value="all" onClick={handleClick} checked={isAllSelected} />
                    <label for="all">Select all</label>
                </div>
                {attributes.map((attr, index) => (
                    <div key={index}>
                        <input type="checkbox" id={attr} name={attr} value={attr} onClick={handleClick} checked={isAllSelected || selectedAttributes.includes(attr)} />
                        <label for={attr}>{attr}</label>
                    </div>
                ))}
                <br/>
                <button type="submit"> Apply </button> <br />
            </form>
            <div id="updateNameResultMsg"></div>
            <h2>Get the Average Price by the Cuisine Type</h2>
            <form onSubmit={(e) => groupbyCuisineAvgPrice(e, ["cuisine", "avg price"])}>
                <button type="submit"> Apply </button>
            </form>
            <br />
            <table id="cuisineAvgPrice" border="1">
                <thead>
                    <tr>
                        {["cuisine", "avg price"]?.map((attr, index) => <th key={index}>{attr}</th>)}
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            <div id="selectResultMsg"></div>
        </PageLayout>
    )
}