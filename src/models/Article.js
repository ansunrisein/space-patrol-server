const Mongoose = require("mongoose");

const articleSchema = new Mongoose.Schema({
    title: {type: String, required: true},
    image: {type: String, required: true},
    text: {type: String, required: true},
});

module.exports = Mongoose.model("Article", articleSchema);
