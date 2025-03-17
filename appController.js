const express = require('express');
const appService = require('./appService');

const router = express.Router();

// ----------------------------------------------------------
// API endpoints
// Modify or extend these routes based on your project's needs.
router.get('/check-db-connection', async (req, res) => {
    const isConnect = await appService.testOracleConnection();
    if (isConnect) {
        res.send('connected');
    } else {
        res.send('unable to connect');
    }
});

router.get('/cheftable', async (req, res) => {
    const tableContent = await appService.fetchCheftableFromDb();
    res.json({ data: tableContent });
});

router.post("/initiate-cheftable", async (req, res) => {
    const initiateResult = await appService.initiateCheftable();
    if (initiateResult) {
        res.json({ success: true });
    } else {
        res.status(500).json({ success: false });
    }
});

router.post("/insert-cheftable", async (req, res) => {
    const { chef_name, years_of_experience, seniority, cooking_license } = req.body;
    const insertResult = await appService.insertCheftable(chef_name, years_of_experience, seniority, cooking_license);
    if (insertResult) {
        res.json({ success: true });
    } else {
        res.status(500).json({ success: false });
    }
});

router.get("/count-cheftable", async (req, res) => {
    const tableCount = await appService.countCheftable();
    if (tableCount >= 0) {
        res.json({
            success: true,
            count: tableCount
        });
    } else {
        res.status(500).json({
            success: false,
            count: tableCount
        });
    }
});

router.get('/recipetable', async (req, res) => {
    const tableContent = await appService.fetchRecipetableFromDb();
    res.json({ data: tableContent });
});

router.post("/initiate-recipetable", async (req, res) => {
    const initiateResult = await appService.initiateRecipetable();
    if (initiateResult) {
        res.json({ success: true });
    } else {
        res.status(500).json({ success: false });
    }
});

router.post("/update-name-recipetable", async (req, res) => {
    const { oldName, newName } = req.body;
    const updateResult = await appService.updateNameRecipetable(oldName, newName);
    if (updateResult) {
        res.json({ success: true });
    } else {
        res.status(500).json({ success: false });
    }
});

router.get("/count-recipetable", async (req, res) => {
    const tableCount = await appService.countRecipetable();
    if (tableCount >= 0) {
        res.json({
            success: true,
            count: tableCount
        });
    } else {
        res.status(500).json({
            success: false,
            count: tableCount
        });
    }
});

router.post("/delete-id-recipetable", async (req, res) => {
    const { recipeId } = req.body;
    const updateResult = await appService.deleteIdRecipetable(recipeId);
    if (updateResult) {
        res.json({ success: true });
    } else {
        res.status(500).json({ success: false });
    }
});

router.get('/hastable', async (req, res) => {
    const tableContent = await appService.fetchHastableFromDb();
    res.json({ data: tableContent });
});

router.post("/initiate-hastable", async (req, res) => {
    const initiateResult = await appService.initiateHastable();
    if (initiateResult) {
        res.json({ success: true });
    } else {
        res.status(500).json({ success: false });
    }
});

router.get("/count-hastable", async (req, res) => {
    const tableCount = await appService.countHastable();
    if (tableCount >= 0) {
        res.json({
            success: true,
            count: tableCount
        });
    } else {
        res.status(500).json({
            success: false,
            count: tableCount
        });
    }
});


module.exports = router;