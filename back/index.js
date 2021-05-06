require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose');
const path = require('path')
const app = express()
const cors = require('cors')

const projectsRoutes = require('./routes/api/projects.js')
const projectBlogsRoutes = require('./routes/api/projectBlogs.js')
const port = 3000;

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build'));
})


app.use(cors({ origin: true, credentials: true }));

app.use("/api/projects", projectsRoutes);
app.use("/api/projectblogs", projectBlogsRoutes);

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