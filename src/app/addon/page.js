import PageLayout from "../components/page-layout";

const title = "Menu Item Addons";
const tableName = "AddOn";
const attributes = ["Addon Name", "Menu Item Name" , "Price"];
export default function HasPage() {

    return (
        <PageLayout title={title} tableName={tableName} attributes={attributes} >
            
        </PageLayout>
    )
}