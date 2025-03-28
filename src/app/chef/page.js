'use client';
import { getAvgYOE, insertCheftable } from "../api/scripts";
import PageLayout from "../components/page-layout";

const attributes = ["Name", "Years of Experience", "Seniority", "Cooking_license"];
const yoeAttributes = ["Seniority", "Average Years of Experience", "Count"];
const title = "Chef";
const tableName = "Chef";

export default function ChefPage() {
    return (
        <PageLayout title={title} tableName={tableName} attributes={attributes}>
            <h2>Insert Values into { title } Table</h2>
            <form onSubmit={e => insertCheftable(e, tableName)}>
                Name: <input type="text" id="insertChefName" placeholder="Enter Name" required /> <br /><br />
                Years of Experience: <input type="number" id="insertYOE" placeholder="Enter Years of Experience" maxLength="20" /> <br /><br />
                Seniority: <select id="insertSeniority">
                    <option value="beginner">Just Starting Out</option>
                    <option value="apprentice">Have some experience</option>
                    <option value="novice">Knows the kitchen</option>
                    <option value="master">The cooker</option>
                </select> <br /><br />
                License: <input type="text" id="insertLicense" placeholder="Enter License" required /> <br /><br />
                <button type="submit"> insert </button> <br />
            </form>
            <div id="insertResultMsg"></div>
            
            <br /><hr /><br />
            
            <h2>Get the average years of experience of each seniority level that has at least 2 Chefs</h2>
            <form onSubmit={(e) => getAvgYOE(e, yoeAttributes)}>
                <button type="submit"> Apply </button>
            </form>
            <br />
            <table id="avgYOE" border="1">
                <thead>
                    <tr>
                        {yoeAttributes?.map((attr, index) => <th key={index}>{attr}</th>)}
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            <div id="selectResultMsg"></div>
        </PageLayout>
    )
}