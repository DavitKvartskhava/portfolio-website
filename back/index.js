require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose');
const app = express()
const cors = require('cors')
const projectsRoutes = require('./routes/api/projects.js')
const port = 3000;

app.get("/", (req, res) => {
  res.send("mellow");
});

app.use(cors({ origin: true, credentials: true }));

app.use("/api/projects", projectsRoutes);

const DB_CONN_STRING = process.env.DB_CONN_STRING;

mongoose
  .connect(DB_CONN_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () =>
      console.log(`Server running on port ${port} and connected to the DB`)
    )
  )
  .catch((error) => console.log(error.message));