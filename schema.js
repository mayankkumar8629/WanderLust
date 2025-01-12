const Joi = require("joi");

// module.exports.listingSchema = Joi.object({
//   listing: Joi.object({
//     title: Joi.string().required(),
//     description: Joi.string().required(),
//     location: Joi.string().required(),
//     country: Joi.string().required(),
//     price: Joi.number().required().min(0),
//     image: Joi.string().uri().required(),
//   }).required(),
// });
module.exports.listingSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.object({
    filename: Joi.string(),  // Optional if you don't always send a filename
    url: Joi.string().uri().required(),  // Ensure it's a valid URL
  }).required(),  // Marking image as required if it's mandatory
  price: Joi.number(),
  location: Joi.string(),
  country: Joi.string(),
  reviews: Joi.array().items(Joi.string()),  // Assuming it's an array of review IDs
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});
