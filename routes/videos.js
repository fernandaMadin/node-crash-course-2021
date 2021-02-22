var express = require('express');
var {
	getVideoList,
	saveVideo,
	updateVideo,
	deleteVideo,
} = require('../controllers/videos');
var api = express.Router();

api.get('/getVideoList', getVideoList);
api.post('/saveVideo', saveVideo);
api.put('/updateVideo', updateVideo);
api.delete('/deleteVideo', deleteVideo);

module.exports = api;
