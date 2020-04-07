const express = require('express');
const as = require('express-async-handler');

const ArticleService = require('../services/ArticleService');

const router = express.Router();

router.get('/article/:id', as(async (req, res) => {
    const {id} = req.params;
    const article = await ArticleService.find(id);

    if(!article)
        return res.sendStatus(404);

    return res.json(article);
}));

router.post('/article', as(async (req, res) => {
    const {title, image, text} = req.body;

    const article = await ArticleService.create(title, image, text);

    return res.json(article);
}));

module.exports = router;