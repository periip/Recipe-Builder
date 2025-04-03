'use client';
import PageLayout from "../components/page-layout";

const title = "Ingredients";
const tableName = "Ingredient";
const attributes = ["Ingredient Name", "Price"];
export default function HasPage() {

    return (
        <PageLayout title={title} tableName={tableName} attributes={attributes} >
            
        </PageLayout>
    )
}