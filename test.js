require("dotenv").config();

console.log("Starting...");
console.log(process.env.ATLASDB_URL ? "✅ URL loaded" : "❌ URL missing");

const mongoose = require("mongoose");

async function test() {
    try {
        await mongoose.connect(process.env.ATLASDB_URL);
        console.log("✅ Connected to MongoDB");
    } catch (err) {
        console.error("❌ Connection failed");
        console.error(err);
    } finally {
        process.exit();
    }
}

test();