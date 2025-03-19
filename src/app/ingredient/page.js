import PageLayout from "../components/page-layout";

const title = "Ingredients";
const tableName = "Ingredient";
const attributes = ["ingredient_name", "price"];
export default function HasPage() {

    return (
        <PageLayout title={title} tableName={tableName} attributes={attributes} >
            
        </PageLayout>
    )
}