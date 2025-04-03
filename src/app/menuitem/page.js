'use client';
import React, { useState } from "react";
import PageLayout from "../components/page-layout";
import { projectMenuItemTable, groupbyCuisineAvgPrice, groupbyGourmetHavingPrice } from "../api/scripts";
import DataTable from "../components/data-table";

const title = "Menu Items";
const tableName = "MenuItem";
const attributes = ["Menu Item Name", "Cuisine", "Price", "Dietary Restrictions", "License Requirement", "Gourmet"];
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
                    <input type="checkbox" id="all" name="all" value="all" onChange={handleClick} checked={isAllSelected} />
                    <label htmlFor="all">Select all</label>
                </div>
                {attributes.map((attr, index) => (
                    <div key={index}>
                        <input type="checkbox" id={attr} name={attr} value={attr} onChange={handleClick} checked={isAllSelected || selectedAttributes.includes(attr)} />
                        <label htmlFor={attr}>{attr}</label>
                    </div>
                ))}
                <br/>
                <button type="submit"> Apply </button> <br />
            </form>
            <div id="projectResultMsg"></div>
            <h2>Get the Average Price by the Cuisine Type</h2>
            <form onSubmit={(e) => groupbyCuisineAvgPrice(e, ["cuisine", "avg price"])}>
                <button type="submit"> Apply </button>
            </form>
            <br />
            <DataTable attributes={["Cuisine", "Avg Price"]} id="cuisineAvgPrice" />
            <div id="avgPriceResultMsg"></div>
            <h2>Get the Min Price by Cuisine and Gourmet</h2>
            <form onSubmit={(e) => groupbyGourmetHavingPrice(e)}>
                <button type="submit"> Apply </button> <br />
            </form>
            <br />
            <DataTable attributes={["Cuisine", "Gourmet", "Min Price"]} id="cuisineHavingPrice" />
            <div id="havingResultMsg"></div>
        </PageLayout>
    )
}