const express = require("express");
const router = express.Router();
const supabase = require("../config/supabase");

router.post("/create", async(req,res) => {
    const { customer_id, vehicle_id, location, distance_Km, passengers} = req.body;
    const { data,error} = await
    supabase.from("trips".insert([{
        customer_id, vehicle_id, location, distance_Km, passengers
    }]));

    res.json(data);
});

router.patch("/end/:id",async (req,res) => {
        await supabase.rpc("end_trip",
            {trip_id: req.params.id}
        );
        res.json({message: " Trip ended sucessfully"})
    })

    module.exports = router;