const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const peopleSchema = Schema({

    name: String,
    image: String,
    title: String,
    },  {
    timestamps: true
  });

  const People = mongoose.model("People", peopleSchema);

  // Export Customer Model
module.exports = People;