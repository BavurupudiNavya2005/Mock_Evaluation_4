const express = require("express");
const router = express.Router();
const supabase = require("../config/supabase");

router.post("/add", async(req,res) => {
    const { name, registration_number, allowed_passengers, rate_per_Km, owner_id} = req.body;

    const{ data, error} = await supabase
    .from("vehicles")
    .insert([{name, registration_number, allowed_passengers, rate_per_Km, owner_id}]);

    if(error) return res.status(400).json(error);
    res.json(data);
});

router.patch("/assign-driver/:id",async (req, res) => {
    const { driver_id} = req.body;
    const{ data,error} = await supabase
    .from("vehicles")
    .update({driver_id})
    .eq("id",req.params.id);

    res.json(data);
});

module.exports = router;