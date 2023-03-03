const express = require("express");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config();

const usersRouter = require("./routes/api/users");
const vocabularyRouter = require('./routes/api/vocabulary')
const grammarRouter = require('./routes/api/grammar')
const lessonsRouter = require('./routes/api/lessons')

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/users", usersRouter);
app.use("/api/vocabulary", vocabularyRouter);
app.use("/api/grammar", grammarRouter);
app.use("/api/lessons", lessonsRouter)

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
