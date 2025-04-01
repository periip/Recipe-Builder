'use client';
import PageLayout from "../components/page-layout";
import { deleteIDRecipetable, updateNameRecipetable } from "../api/scripts";

const attributes = ["Recipe ID", "Chef Name", "Recipe Name"];
const title = "Recipe";
const tableName = "RecipeOwns";
export default function RecipePage() {
   
    return (
        <PageLayout title={title} tableName={tableName} attributes={attributes}>
            <h2>Update Name in RecipeTable</h2>
            <p>The values are case sensitive and if you enter in the wrong case, the update statement will not do anything.</p>
            <form id="updataNameRecipetable" onSubmit={(e) => updateNameRecipetable(e, tableName)}>
                Name to Update: <select id="updateAttribute">
                    <option value="chef_name">Chef Name</option>
                    <option value="recipe_name">Recipe Name</option>
                </select> <br /><br />
                Original Name: <input type="text" id="updateOldName" placeholder="Enter Old Recipe Name" required /> <br /><br />
                New Name: <input type="text" id="updateNewName" placeholder="Enter New Chef Name" maxLength="20" /> <br /><br />
                <button type="submit"> Update </button> <br />
            </form>
            <div id="updateResultMsg"></div>

            <br/><hr /><br/>

            <h2>Delete {title} in { title } Table</h2>
            <p>The values are case sensitive and if you enter in the wrong case, the delete statement will not do anything.</p>
            <form id="DeleteIDRecipetable" onSubmit={(e) => deleteIDRecipetable(e, tableName)}>
                recipe ID: <input type="number" id="deleteOldId" placeholder="Enter recipe ID" required/> <br/><br/>
                <button type="submit"> Delete </button> <br/>
            </form>
            <div id="deleteIdResultMsg"></div>
        </PageLayout>
    )
}   