'use client';
import PageLayout from "../components/page-layout";
import { getGourmetRecs } from "../api/scripts";

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
            <table id="gourmetRecs" border="1">
                <thead>
                    <tr>
                        {attributes?.map((attr, index) => <th key={index}>{attr}</th>)}
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            <div id="selectResultMsg"></div>
        </PageLayout>
    )
}