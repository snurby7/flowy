import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import biteClubApi from "./bites/bite-club";
import { middleware } from "./middleware";

require("dotenv").config();

const expressApi = express();

expressApi.use(morgan("dev"));
expressApi.use(helmet());
expressApi.use(cors());
expressApi.use(express.json());

expressApi.get("/", (req, res) => {
  res.json({
    message: "You did it!",
  });
});

expressApi.use("/v1/bites", biteClubApi);

expressApi.use(middleware.notFound);
expressApi.use(middleware.errorHandler);

export const app = expressApi;
