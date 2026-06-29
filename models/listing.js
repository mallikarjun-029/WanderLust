const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./reviews.js");

const ListingSchema = new Schema({
    title: {
        type: String,
        required:true
    },
    description: String,
    image: {
        filename:String,
        url: {
            type : String,
            set: (v) =>
                v === ""
                    ? "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8fDA%3D"
                    : v,
        }
    },
    reviews:[ {
        type: Schema.Types.ObjectId,
        ref:"Review"
    } ],
    owner: {
        type: Schema.Types.ObjectId,
        ref:"User" 
    },
    geometry: {
        type: {
            type: String,
            enum: [ 'Point' ],
            required:true
        },
        coordinates: {
            type: [ Number ],
            validate: {
                validator: arr => arr.length === 2,
                message: "Coordinates must contain longitude and latitude."
            }
        }
    },
    category: {
        default : "new",
        type: String,
    },
    price : Number,
    location : String,
    country : String
});

ListingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
});

const Listing = mongoose.model("Listing", ListingSchema);




module.exports = Listing;
