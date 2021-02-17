let express = require('express')
let app = express();
let videos = require('./routes/videos');
let bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = 3000;
const dbUser = 'fernandaRamos';
const dbPassword = 'admin';
const dbName = 'videos';
const dbUri = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.cpa0q.mongodb.net/${dbName}?retryWrites=true&w=majority`;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected…'))
  .catch(err => console.log(err))

app.listen(port, () => {
    console.log(`Started on port: ${port}.`);
});

app.use('/api', videos);
module.exports = app; 