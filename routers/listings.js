const express = require("express");
const router = express.Router();


const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const passport = require("passport");
const { isLoggedIn, isOwner, validateListing, validateId } = require("../middleware.js");
const listingController = require("../controllers/listings.js");


const { storage } = require("../cloudConfig.js");
const multer = require('multer');
const upload = multer({ storage });  

//Index route
router.route("/")
    .get(wrapAsync(listingController.index))
    .post(upload.single('listing[image]') , validateListing, wrapAsync(listingController.createNewListing));


//create
router.get("/new", isLoggedIn, listingController.renderNewListing);


router.get("/category/:category", listingController.filterListing);

 
router.route("/:id")
    .get(validateId,wrapAsync(listingController.showListing))
    .patch(isLoggedIn,upload.single('listing[image]'),validateListing,validateId,wrapAsync(listingController.updateListing));

//update
router.get("/:id/edit",isLoggedIn,isOwner,validateId,wrapAsync(listingController.renderEditListing));

//delete
router.delete("/:id",isLoggedIn,isOwner,validateId, wrapAsync(listingController.deleteListing));



module.exports = router;

