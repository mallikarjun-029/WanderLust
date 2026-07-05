const path = require("path");

require("dotenv").config({
    path: path.join(__dirname, "../.env")
});

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbUrl = process.env.ATLASDB_URL;

main()
    .then(async () => {
        console.log("connected to mongoose");
        await initDB();
        mongoose.connection.close();
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(dbUrl);
}

const initDB = async () => {
    await Listing.deleteMany({});

    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "6a4a9ccab5e3d84b29dcf0cc"
    }));

    await Listing.insertMany(initData.data);

    const count = await Listing.countDocuments();
    console.log("Total Listings:", count);

    console.log("data was initialized");
};