import PageLayout from "../components/page-layout";

const title = "Food";
const tableName = "Food";
const attributes = ["Menu Item Name", "Course"];
export default function HasPage() {

    return (
        <PageLayout title={title} tableName={tableName} attributes={attributes} >
            
        </PageLayout>
    )
}