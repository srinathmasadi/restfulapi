const express = require("express");
require("./db/conne");
const Student = require("./models/students");
const studentRouter = require("./routers/student");

const app = express();
const port= process.env.PORT || 3000;
app.use(express.json());
app.use(studentRouter);

app.listen(port, () =>{
    console.log(`connection is setup at ${port}`);
})