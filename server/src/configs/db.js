// mongodb+srv://pankajganjale:<password>@cluster0.iyka3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://pankajganjale:pankajganjale@cluster0.iyka3.mongodb.net/expensetracker?retryWrites=true&w=majority");
}

module.exports = connect;
