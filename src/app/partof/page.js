import PageLayout from "../components/page-layout";

const title = "Combo is Part Of MenuItem";
const tableName = "PartOf";
const attributes = ["Combo Name", "Menu Item Name"];
export default function HasPage() {

    return (
        <PageLayout title={title} tableName={tableName} attributes={attributes} >
            
        </PageLayout>
    )
}