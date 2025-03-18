import PageLayout from "../components/page-layout";

const title = "Recipe Has Ingredient";
const tableName = "Has";
const attributes = ["Recipe ID", "Ingredient Name", "Quantity", "Unit"];
export default function HasPage() {

    return (
        <PageLayout title={title} tableName={tableName} attributes={attributes} >
            
        </PageLayout>
    )
}