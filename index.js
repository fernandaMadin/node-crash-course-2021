const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config()
const port = process.env.PORT;
const dbUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.cpa0q.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const videos = require('./routes/videos');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

try {
  mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('MongoDB Connected.')
} catch (error) {
  console.log('MongoDB Error: ', error)
}

app.use('/api', videos);
app.listen(port, () => {
    console.log(`Started on port: ${port}.`);
});

module.exports = app;
