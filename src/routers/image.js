const fs = require("fs");
const express = require("express");
const multer = require('multer');

const fileFilter = (_, {mimetype}, cb) => cb(null, /^image\//.test(mimetype));

const upload = multer({dest: 'public/images', fileFilter});

const router = express.Router();

router.post('/image', upload.single('image'), ({file}, res) => {
    const match = file.originalname.match(/\..+$/);
    if (match) {
        const [ext] = match;
        const path = file.path + ext;
        const url = path.replace(/public\\/, '');
        fs.rename(file.path, path, () => res.json({url}));
    }
});

module.exports = router;