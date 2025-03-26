import PageLayout from "../components/page-layout";

const title = "Food";
const tableName = "Food";
const attributes = ["menu_item_name", "course"];
export default function HasPage() {

    return (
        <PageLayout title={title} tableName={tableName} attributes={attributes} >
            
        </PageLayout>
    )
}