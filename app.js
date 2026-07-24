require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { errors } = require("celebrate");
const { login, createUser } = require("./controllers/users");
const { getClothingItems } = require("./controllers/clothingItems");
const auth = require("./middlewares/auth");
const { validateUserBody, validateLogin } = require("./middlewares/validation");
const { requestLogger, errorLogger } = require("./middlewares/logger");

const { PORT = 3001 } = process.env;
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/wtwr_db");

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.get("/crash-test", () => {
  setTimeout(() => {
    throw new Error("Server will crash now");
  }, 0);
});

app.post("/signin", validateLogin, login);
app.post("/signup", validateUserBody, createUser);
app.get("/items", getClothingItems);

app.use(auth);

app.use("/", require("./routes/index"));

app.use(errorLogger);

app.use(errors());

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err);
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message:
      statusCode === 500 ? "An error occurred on the server" : message,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
