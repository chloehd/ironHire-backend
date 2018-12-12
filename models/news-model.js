const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  message: { type: String, required: true },
  owner: { 
      type: Schema.Types.ObjectId, 
      ref: "Association",
      required: true },
  image: { type: String },
  link: { type: String },
} , {
  timestamps: true,
});

const News = mongoose.model( "News", newsSchema );

module.exports = News;