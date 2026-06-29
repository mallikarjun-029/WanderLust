const User = require("../models/users.js");
const Listing = require("../models/listing.js");


module.exports.renderSignUp = (req, res) => {
    res.render("users/signUp.ejs");
};

module.exports.signUp = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ username, email });
        const registerUser = await User.register(newUser, password);
        //login directly after signup
        req.login(registerUser, (err) => {
            if (err) {
                next(err);
            }
            req.flash("success", "Welcome to WanderLust");
            res.redirect("/listings");
        });

        // console.log(registerUser);
        
    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
};

module.exports.renderLogin = (req, res) => {
    res.render("users/login.ejs");
};

module.exports.login = async (req, res) => {
    
    req.flash("success", "Welcome back to WanderLust");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            next(err);
        }
        req.flash("error", "Logged Out of account");
        res.redirect("/listings");
    });
};

