const express = require("express");
const router = express.router();
const supabase = require("../config/supabase");

router.post("/register", async (requestAnimationFrame, res) => {
    const { name, email,password, role} = req.body;

    const {data,error} = await supabase
    .from("users")
    .insert([{name, email, password, role}]);

    if (error) return res.status(400).json(error);
    res.json({message: "User Created", data});

});

module.exports = router;