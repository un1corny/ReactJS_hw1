const express = require('express');
const PostsModel = require('../models/posts');

let router = express.Router();

// Получение постов
router.get('/', function (req, res, next) {
    PostsModel.find({}, function (err, posts) {
        if(err) {
            return next(err);
        }
        res.json(posts);

    });
});

router.get('/delete/:idPost', function (req, res, next) {
    //Получаем параметр
    let idPost = req.params.idPost;
    res.json(req.params);
});

module.exports = router;