const mongoose = require("mongoose");

//creating a database 
mongoose.connect("mongodb://localhost/business", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("We are connected!");
}).catch((error) => {
    console.log(error);
})