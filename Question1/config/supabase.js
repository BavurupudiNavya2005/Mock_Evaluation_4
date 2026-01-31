const { craeteClient, createClient } = require("@supabase/supabase-js");

const supabase = createClient(
    process.env.supabase_URL,
    process.env.supabase_key
)

module.exports = supabase;