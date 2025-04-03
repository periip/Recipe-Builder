import PageLayout from "../components/page-layout";

const title = "Supplier";
const tableName = "Supplier";
const attributes = ["Supplier Name"];
export default function SupplierPage() {

    return (
        <PageLayout title={title} tableName={tableName} attributes={attributes} >

        </PageLayout>
    )
}