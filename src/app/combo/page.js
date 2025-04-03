import PageLayout from "../components/page-layout";

const title = "Combos";
const tableName = "Combo";
const attributes = ["Combo Name", "Price"];
export default function HasPage() {

    return (
        <PageLayout title={title} tableName={tableName} attributes={attributes} >
            
        </PageLayout>
    )
}