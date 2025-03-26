import PageLayout from "../components/page-layout";

const title = "Combo is Part Of MenuItem";
const tableName = "PartOf";
const attributes = ["combo_name", "menu_item_name"];
export default function HasPage() {

    return (
        <PageLayout title={title} tableName={tableName} attributes={attributes} >
            
        </PageLayout>
    )
}