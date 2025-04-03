'use client';
import PageLayout from "../components/page-layout";
import { JoinRecipeIngTable } from "../api/scripts";
import DataTable from "../components/data-table";

const title = "Recipe Has Ingredient";
const tableName = "Has";
const attributes = ["Recipe ID", "Ingredient Name", "Quantity", "Unit"];
const jointAttributes = ["Chef Name", "Recipe ID", "Recipe Name", "Ingredient Name", "Quantity", "Unit"];
export default function HasPage() {

    return (
        <PageLayout title={title} tableName={tableName} attributes={attributes} >
            <h2>Find all the recipes that uses ingredient</h2>
            <p>The values are case sensitive and if you enter in the wrong case, the filters will not do anything. If you want to input multiple values, separate them by a comma.</p>
            <form onSubmit={e => JoinRecipeIngTable(e, jointAttributes)}>         
                Ingredient Name: <input id="ingredient_name" type="text" placeholder="Enter Ingredient" /> <br /><br />
                <button type="submit"> Find </button>
            </form>
            <br />
            <DataTable attributes={jointAttributes} id="recipeIngTable" />
            <div id="selectResultMsg"></div>
        </PageLayout>
    )
}