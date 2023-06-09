const mongoose = require("mongoose");

let applicantSchema = new mongoose.Schema({
  usertype: {
    type: Number,
    default: 0
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    default: "http://res.cloudinary.com/dwzwff7c7/image/upload/v1679897232/eiyctzpwuhlukgzoadgo.jpg"
  }
});

module.exports = mongoose.model("applicants", applicantSchema);