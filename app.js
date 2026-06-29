if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

const express = require("express");
const app = express();

const mongoose = require("mongoose");
const path = require("path");
const Listing = require("./models/listing.js");
const listingsRouter = require("./routers/listings.js");
const reviewsRouter = require("./routers/reviews.js");
const usersRouter = require("./routers/users.js");

const MongoStore = require('connect-mongo').default;

const dbUrl = process.env.ATLASDB_URL;


const session = require("express-session");
const flash =  require('connect-flash');

const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./models/users.js");


const ExpressError = require("./utils/ExpressError.js");

const wrapAsync = require("./utils/wrapAsync.js");
const { listingSchema, reviewSchema } = require("./schema.js");

const Review = require("./models/reviews.js");

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);


app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

const ejsLint = require('ejs-lint');
const { execArgv } = require("process");
const { error } = require("console");



const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: ({
        secret: process.env.SECRET,
    }),
    touchAfter: 24 * 3600
});

store.on("error",(err)=> {
    console.log("error in mongo store:", err);
});

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000 ,
        httpOnly: true
    }
};


const MONGO_URL = "mongodb://127.0.0.1:27017/WanderLust";


main()
    .then(() => {
        console.log("connected to  mongoose");
    })
    .catch(err => console.log(err));


async function main() {
    await mongoose.connect(dbUrl);
}

app.use(session(sessionOptions));
app.use(flash());


app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", usersRouter);


app.all("*", (req, res, next) => {
    if (error) {
        console.log(error);
    }
    console.log(req.method, req.originalUrl);
    next(new ExpressError(404, "page not found"));
});


app.use((err, req, res, next) => {
    let { statusCode = 500, message = "something went wrong" } = err;
    res.status(statusCode).render("listings/error.ejs", { message });
});


let port = 8086;

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});
