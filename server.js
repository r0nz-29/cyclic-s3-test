import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.post("/upload", (req, res) => {

})

app.get("/getFile", (req, res) => {

})

app.listen(5000, () => {
  console.log("running at 5000");
})