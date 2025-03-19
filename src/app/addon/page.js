import PageLayout from "../components/page-layout";

const title = "Menu Item Addons";
const tableName = "AddOn";
const attributes = ["addon_name", "menu_item_name" , "price"];
export default function HasPage() {

    return (
        <PageLayout title={title} tableName={tableName} attributes={attributes} >
            
        </PageLayout>
    )
}