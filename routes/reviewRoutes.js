const express = require('express');
const reviewController= require('../controllers/reviewController.js');
const reviewRouter= express.Router();

reviewRouter.route('/')
    .get(reviewController.getAllReview)
    .post(reviewController.addReview);

// reviewRouter.route('/:id')
//     .put(reviewController);

module.exports= reviewRouter;