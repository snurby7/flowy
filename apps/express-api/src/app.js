const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const middlewares = require("./middleware");
const biteClubApi = require("./controllers/bite-club");

require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "You did it!",
  });
});

app.use("/v1/bites", biteClubApi);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
