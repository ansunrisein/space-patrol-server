const Article = require("../models/Article");

const create = (title, image, text) => Article.create({title, image, text});

const find = id => Article.findById(id);

const all = () => Article.find();

module.exports = {create, find, all};