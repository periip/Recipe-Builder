import PageLayout from "../components/page-layout";

const title = "Supplier";
const tableName = "Supplier";
const attributes = ["supplier_name"];
export default function HasPage() {

    return (
        <PageLayout title={title} tableName={tableName} attributes={attributes} >
            
        </PageLayout>
    )
}