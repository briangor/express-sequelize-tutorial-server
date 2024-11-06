const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

const corsOptions = {
    origin: ["http://localhost:8081", "http://localhost:3000", process.env.PROD_URL]
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to 0xb13 application. "});
});

const db = require("./app/models/db.model");
db.sequelize.sync()
.then(() => {
    console.log("Synced db.");
})
.catch((err) => {
    console.log("Failed to sync db: " + err.message);
});

require("./app/routes/tutorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8083
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
