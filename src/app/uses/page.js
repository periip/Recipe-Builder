import PageLayout from "../components/page-layout";

const title = "Recipe Uses Equipment";
const tableName = "Uses";
const attributes = ["equipment_name", "equipment_material", "recipe_ID"];
export default function HasPage() {

    return (
        <PageLayout title={title} tableName={tableName} attributes={attributes} >
            
        </PageLayout>
    )
}