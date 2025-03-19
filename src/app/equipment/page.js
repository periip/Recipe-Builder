import PageLayout from "../components/page-layout";

const title = "Equipments";
const tableName = "Equipment";
const attributes = ["equipment_name", "equipment_material"];
export default function HasPage() {

    return (
        <PageLayout title={title} tableName={tableName} attributes={attributes} >
            
        </PageLayout>
    )
}