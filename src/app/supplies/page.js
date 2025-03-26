import PageLayout from "../components/page-layout";

const title = "Supplier Supplies Ingredients";
const tableName = "Supplies";
const attributes = ["supplier_name", "ingredient_name", "since"];
export default function HasPage() {

    return (
        <PageLayout title={title} tableName={tableName} attributes={attributes} >
            
        </PageLayout>
    )
}