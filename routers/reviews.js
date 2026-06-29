const express = require("express");
const router = express.Router({mergeParams : true});

const Listing = require("../models/listing.js");

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const Review = require("../models/reviews.js");
const { isLoggedIn, validateReview, isReviewAuther } = require("../middleware.js");



const reviewController = require("../controllers/reviews.js");



router.post("/", validateReview,isLoggedIn,wrapAsync(reviewController.newReview));

router.delete("/:reviewId", isLoggedIn, isReviewAuther,wrapAsync(reviewController.deleteReview));

module.exports = router;




