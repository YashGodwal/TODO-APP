const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT=3222;
// conenction to mongodb
mongoose.connect("mongodb+srv://yashgodwal:porsche911@cluster0.k7ybm4v.mongodb.net/todo_express", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");


app.listen(port,(req,res) => {
    console.log(`SERVER IS LISTENING ON ${PORT}`);
})
// routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))


// server configurations....
