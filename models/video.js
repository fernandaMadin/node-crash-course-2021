var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VideoSchema = Schema({
  id: { type: String, require: true },
  title: { type: String, require: true },
  thumbnail: { type: String, require: true },
  description: { type: String, require: false }
});

module.exports = mongoose.model('Video', VideoSchema);