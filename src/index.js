const express = require('express');
const Mongoose = require('mongoose');

const articleRouter = require('./routers/article');
const imageRouter = require('./routers/image');

Mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.use('/api', articleRouter);
app.use('/api', imageRouter);

app.listen(3001, () => console.log('Started'));