import PageLayout from "../components/page-layout";

const title = "Recipe Makes MenuItem";
const tableName = "Makes";
const attributes = ["Recipe ID", "Chef Name", "Menu Item Name"];
export default function HasPage() {

    return (
        <PageLayout title={title} tableName={tableName} attributes={attributes} >
            
        </PageLayout>
    )
}