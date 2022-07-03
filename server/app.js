const express = require("express");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");

// cors
const corsOptions = require("./config/cors.js");

// tools
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

// auth
const { checkUser, requireAuth } = require("./middlewares/auth.middleware");

// user
const userRoutes = require("./routes/user.routes");

const app = express();

app.use(corsOptions);
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

// token;
app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
	res.status(200).send(res.locals.user._id);
});

app.use("/api/user", userRoutes);

module.exports = app;
