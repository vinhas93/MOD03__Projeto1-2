const mongoose = require('mongoose');

const Hero__schema = new mongoose.Schema({
   name: {
      type: String,
      require: true
   },
   class: {
      type: String,
      require: true
   },
   skill: {
      type: String,
      require: true
   },
   story: {
      type: String,
      require: true
   }
})

const Hero = mongoose.model('heroes', Hero__schema)

module.exports = Hero