import PageLayout from "../components/page-layout";

const title = "Recipe Makes MenuItem";
const tableName = "Makes";
const attributes = ["recipe_ID", "chef_name", "menu_item_name"];
export default function HasPage() {

    return (
        <PageLayout title={title} tableName={tableName} attributes={attributes} >
            
        </PageLayout>
    )
}