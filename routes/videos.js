var express = require('express');
var videosController = require('../controllers/videosController');
var api = express.Router();

api.get('/getVideoList', videosController.getVideoList);
api.post('/saveVideo', videosController.saveVideo);
api.put('/updateVideo', videosController.updateVideo);
api.delete('/deleteVideo', videosController.deleteVideo);

module.exports = api;