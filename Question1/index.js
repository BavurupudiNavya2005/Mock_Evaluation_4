require("dotenv").config();
const logger = require("./middlewares/logger");
const express = require("./middlewares/logger");
const ratelimiter = require("./middlewares/ratelimiter");
const rateLimit = require("./middlewares/ratelimiter");

const app = express();

app.use(express.json());
app.use(logger);
app.use(ratelimiter);

app.use("/users",require("./routes/user.routes"));
app.use("/vehicles", require("./routes/vehicle.routes"));
app.use("/trips", require("./routes/trip.routes"));

app.use(require("./middlewares/notFound"));

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});