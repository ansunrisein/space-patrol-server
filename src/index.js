const express = require('express');
const Mongoose = require('mongoose');

const articleRouter = require('./routers/article');

Mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('', articleRouter);

app.listen(3001, () => console.log('Started'));