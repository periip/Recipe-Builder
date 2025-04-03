'use client';
import PageLayout from "../components/page-layout";
import { getGourmetRecs } from "../api/scripts";
import DataTable from "../components/data-table";

const title = "Chef's Recommended";
const tableName = "Recommends";
const attributes = ["Chef Name", "Menu Item Name"];
export default function HasPage() {

    return (
        <PageLayout title={title} tableName={tableName} attributes={attributes} >
            <h2>Get the Chefs that recommend all Gourmet Menu Items</h2>
            <form onSubmit={(e) => getGourmetRecs(e, attributes)}>
                <button type="submit"> Apply </button>
            </form>
            <br />
            <DataTable attributes={attributes} id="gourmetRecs" />
            <div id="selectResultMsg"></div>
        </PageLayout>
    )
}