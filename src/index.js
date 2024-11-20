const doteenv = require("dotenv");
const express = require("express");
const routes = require("./routes");
const cors = require("cors");

doteenv.config();

require("./config/database");
const errorMiddleware = require("./middleware/error");


const app = express();
app.use(express.json());

app.use(cors());
app.use(routes);
app.use(errorMiddleware);
app.listen(process.env.PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
