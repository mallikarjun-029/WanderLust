module.exports = (fun) => {
    return function (req, res, next) {
        // console.log("wrapAsync");
        fun(req, res, next).catch(next);
    }
}