import PageLayout from "../components/page-layout";

const title = "Menu Items";
const tableName = "MenuItem";
const attributes = ["menu_item_name", "cuisine", "price", "dietary_restrictions", "license_requirement", "isGourmet"];
export default function HasPage() {

    return (
        <PageLayout title={title} tableName={tableName} attributes={attributes} >
            
        </PageLayout>
    )
}