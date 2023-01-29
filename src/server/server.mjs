import express from "express";
import cors from "cors";
import routes from "./routes.mjs";

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());
app.use(routes);
app.listen(process.env.PORT || port);

//process.env.PORT
