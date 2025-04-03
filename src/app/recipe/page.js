'use client';
import PageLayout from "../components/page-layout";
import { deleteIDRecipetable, getNameRecipetable, updateNameRecipetable, insertRecipetable } from "../api/scripts";
import { useEffect, useState } from 'react';

const attributes = ["Recipe ID", "Chef Name", "Recipe Name"];
const title = "Recipe";
const tableName = "RecipeOwns";
export default function RecipePage() {
    const [updateNameType, setUpdateNameType] = useState('chef_name');
    const [names, setNames] = useState([]);
    
    
    useEffect(() => {
        async function fetchNames() {
            try {
                const response = await getNameRecipetable(updateNameType);
                setNames(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        
        fetchNames();
    }, [updateNameType])
   
    return (
        <PageLayout title={title} tableName={tableName} attributes={attributes}>
            <h2>Insert Values into { title } Table</h2>
            <form onSubmit={e => insertRecipetable(e, tableName)}>
                Recipe ID: <input type="number" id="insertRecipeID" placeholder="Enter Recipe ID" required /> <br /><br />
                Chef Name: <input type="text" id="insertChefName" placeholder="Enter Chef Name" maxLength="20" required/> <br /><br />
                Recipe Name: <input type="text" id="insertRecipeName" placeholder="Enter Recipe Name" required /> <br /><br />
                <button type="submit"> insert </button> <br />
            </form>
            <div id="insertResultMsg"></div>
            <br /><hr /><br />
            <h2>Update Name in RecipeTable</h2>
            <p>The values are case sensitive and if you enter in the wrong case, the update statement will not do anything.</p>
            <form id="updataNameRecipetable" onSubmit={(e) => updateNameRecipetable(e, tableName)}>
                Name to Update:
                <select id="updateAttribute" onChange={e => setUpdateNameType(e.target.value)}>
                    <option value="chef_name">Chef Name</option>
                    <option value="recipe_name">Recipe Name</option>
                </select> <br />
                Original Name:
                <select id="updateOldName" required defaultValue="">
                    <option value="" disabled>N/A</option>
                    {names && names.map((name, index) => (
                        <option value={name} key={`update_${name}_${index}`}>{name}</option>
                    ))}
                </select>
                New Name:
                <input
                    type="text"
                    id="updateNewName"
                    placeholder={
                        updateNameType === "chef_name"
                        ? "Enter New Chef Name"
                        : "Enter New Recipe Name"
                    }
                    maxLength="20"
                /> <br /><br />
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