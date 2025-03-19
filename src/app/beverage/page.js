import PageLayout from "../components/page-layout";

const title = "Drinks";
const tableName = "Beverages";
const attributes = ["menu_item_name", "hasAlcohol"];
export default function HasPage() {

    return (
        <PageLayout title={title} tableName={tableName} attributes={attributes} >
            
        </PageLayout>
    )
}