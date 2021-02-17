var Video = require('../models/Video');

async function getVideoList(req,res) {
    try {
        let data = await Video.find({});
        if (!data) return res.status(400).send({message: 'Unable to get videos.', status: 400});
        return res.status(200).send({message: 'Requested videos', status: 200, data});
    } catch (error) {
        return res.status(500).send({message: 'Server error', status: 500});
    }
}

async function saveVideo(req,res) {
    try {
        if (!req.body.videos) {
            return res.status(200).send({message: 'No video data received.'});
        }
        let data = await Video.insertMany(req.body.videos);
        if (!data) return res.status(400).send({message: 'Videos no saved.', status: 400});
        return res.status(200).send({message: 'Videos saved', status: 200});
    } catch (error) {
        return res.status(500).send({message: 'Server error', status: 500});
    }
}

async function updateVideo(req,res) {
    try {
        if (!req.body.video) {
            return res.status(200).send({message: 'No video received.'});
        }
        let data = await Video.updateOne({ id: req.body.video.id }, req.body.video);
        if (!data) return res.status(400).send({message: 'Video no updated.', status: 400});
        return res.status(200).send({message: 'Video updated', status: 200});
    } catch (error) {
        return res.status(500).send({message: 'Server error', status: 500});
    }
}

async function deleteVideo(req,res) {
    try {
        if (!req.body.id) {
            return res.status(200).send({message: 'No video id received.'});
        }
        let data = await Video.find({ id: req.body.id }).remove().exec();
        if (!data) return res.status(400).send({message: 'Video no deleted.', status: 400});
        return res.status(200).send({message: 'Video deleted', status: 200});
    } catch (error) {
        return res.status(500).send({message: 'Server error', status: 500});
    }
}

module.exports = {
    getVideoList,
    saveVideo,
    updateVideo,
    deleteVideo
};