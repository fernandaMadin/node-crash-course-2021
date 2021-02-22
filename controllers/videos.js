const Video = require('../models/Video');

async function getVideoList(req,res) {
  try {
    const data = await Video.find({});
    if (!data) {
      res.status(400).send({ message: 'Unable to get videos.' });
      return;
    }
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
}

async function saveVideo(req,res) {
  try {
    if (!req.body.videos) {
      res.status(200).send({message: 'No video data received.'});
      return;
    }
    const data = await Video.insertMany(req.body.videos);
    if (!data) {
      res.status(400).send({ message: 'Videos no saved.' });
      return;
    }
    res.status(200).send({ message: 'Videos saved' });
  } catch (error) {
    res.status(500).send({ error });
  }
}

async function updateVideo(req,res) {
  try {
    if (!req.body.video) {
      res.status(200).send({ message: 'No video received.' });
      return;
    }
    const data = await Video.updateOne({ id: req.body.video.id }, req.body.video);
    if (!data) { 
      res.status(400).send({ message: 'Video no updated.' });
      return;
    }
    res.status(200).send({ message: 'Video updated' });
  } catch (error) {
    res.status(500).send({ error });
  }
}

async function deleteVideo(req,res) {
  try {
    if (!req.body.id) {
      res.status(200).send({ message: 'No video id received.' });
      return;
    }
    const data = await Video.find({ id: req.body.id }).remove().exec();
    if (!data) {
      res.status(400).send({ message: 'Video no deleted.' });
      return;
    }
    res.status(200).send({ message: 'Video deleted' });
  } catch (error) {
    res.status(500).send({ error });
  }
}

module.exports = {
  getVideoList,
  saveVideo,
  updateVideo,
  deleteVideo,
};
