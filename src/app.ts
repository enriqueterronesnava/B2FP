import "dotenv/config";
import express from "express";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./swagger.json";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
db().then(() => {
  console.log("Conecction ready");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
