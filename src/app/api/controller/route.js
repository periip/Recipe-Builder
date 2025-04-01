import { NextResponse } from 'next/server';
import appService from '../../../../appService';

// Handle GET requests for different tables
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');
    const name = searchParams.get('name');

    if (action === 'table') {
        const data = await appService.fetchTableFromDb(name);
        return NextResponse.json({ data });
    }
    if (action === 'count-table') {
        const count = await appService.countTable(name);
        return NextResponse.json({ success: count >= 0, count });
    }
    if (action === 'check-db-connection') {
        const isConnect = await appService.testOracleConnection();
        return NextResponse.json({ message: isConnect ? "connected" : "unable to connect" });
    }
    if (action == 'group_by_cuisine_table') {
        const data = await appService.groupbyCuisineAvgPrice();
        return NextResponse.json({ success: data.length > 0, data });
    }
    if (action == 'group_by_cuisine_having_min_price_table') {
        const data = await appService.groupbyCuisineHavingMinPrice();
        return NextResponse.json({ success: data.length > 0, data });
    }
    if (action == 'get_avg_yoe') {
        const data = await appService.getAvgYOE();
        return NextResponse.json({ success: data.length > 0, data });
    }
    if (action == 'get_gourmet_recs') {
        const data = await appService.getGourmetRecs();
        return NextResponse.json({ success: data.length > 0, data });
    }
    return NextResponse.json({ error: 'Invalid table query' }, { status: 400 });
}

// Handle POST requests
export async function POST(request) {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');
    const name = searchParams.get('name');
    const body = await request.json();

    if (action === 'initiate-table') {
        const success = await appService.initiateTable(name);
        return NextResponse.json({ success });
    }
    if (action === 'insert-table') {
        const { chef_name, years_of_experience, seniority, cooking_license } = body;
        const success = await appService.insertTable(name, chef_name, years_of_experience, seniority, cooking_license);
        return NextResponse.json({ success });
    }
    if (action === 'update-name-recipetable') {
        const { oldName, newName , attribute} = body;
        const success = await appService.updateNameRecipetable(oldName, newName, attribute);
        return NextResponse.json({ success });
    }
    if (action === 'delete-id-recipetable') {
        const { recipeId } = body;
        const success = await appService.deleteIdRecipetable(recipeId);
        return NextResponse.json({ success });
    }
    if (action === 'select-equipment-table') {
        const { condition, nameString, materialString } = body;
        const data = await appService.selectEquipmentTable(condition, nameString, materialString);
        return NextResponse.json({ success: data.length > 0, data });
    }
    if (action === 'project-menu-item-table') {
        const { attributes } = body;
        const data = await appService.projectMenuItemTable(...attributes);
        return NextResponse.json({ success: data.length > 0, data });
    }
    if (action == 'join-recipe-ing-table') {
        const { ingredient } = body;
        const data = await appService.joinRecipeIngTable(ingredient);
        return NextResponse.json({ success: data.length > 0, data });
    }
    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
}