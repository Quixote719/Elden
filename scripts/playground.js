import fs from "fs";
import path from "path";
import express from "express";
import { fileURLToPath } from "url";
import { EventEmitter } from "node:events";

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on("event", function (a, b) {
  console.log(a, b, this, this === myEmitter);
});
myEmitter.emit("event", "p1", "p2");

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const app = express();
const port = 3000;

const data = fs.readFileSync("./hello.txt", { encoding: "utf8", flag: "r" });
fs.writeFileSync("./init.txt", data);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  res.send("Post Request!");
});

app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user.");
});

app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user.");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

fs.writeFileSync(path.resolve(dirname, "doom.txt"), data);
