import express from "express";
import { createServer } from "http";
import index from "./app/routes/index.js";
import cors from "cors";

const port = process.env.PORT || 4001;

const app = express();
app.use(cors());

app.use(express.json()); // Use built-in middleware to parse JSON request bodies

app.use('/api', index);

const server = createServer(app);

server.listen(port, () => console.log(`Listening on port localhost:${port}`));