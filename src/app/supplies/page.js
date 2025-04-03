import PageLayout from "../components/page-layout";

const title = "Supplier Supplies Ingredients";
const tableName = "Supplies";
const attributes = ["Supplier Name", "Ingredient Name", "Since"];
export default function HasPage() {

    return (
        <PageLayout title={title} tableName={tableName} attributes={attributes} >
            
        </PageLayout>
    )
}