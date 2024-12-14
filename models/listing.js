const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: {
      type: String,
    },
    url: {
      type: String,
      default: "https://example.com/path/to/default-image.jpg",
      set: (v) => (v === "" ? "https://example.com/path/to/default-image.jpg" : v),
    }
    ,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

// type: String,
//     default:
//       "https://www.pexels.com/photo/scenic-view-of-a-terrace-plantation-28120193/",
//     set: (v) =>
//       v === ""
//         ? "https://www.pexels.com/photo/scenic-view-of-a-terrace-plantation-28120193/"
//         : v,
