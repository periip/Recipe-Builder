import PageLayout from "../components/page-layout";

const title = "Chef's Recommended";
const tableName = "Recommends";
const attributes = ["chef_name", "menu_item_name"];
export default function HasPage() {

    return (
        <PageLayout title={title} tableName={tableName} attributes={attributes} >
            
        </PageLayout>
    )
}