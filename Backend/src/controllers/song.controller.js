const songModel = require("../models/song.model");
const storageService = require("../services/storage.service");
const id3 = require("node-id3");

async function uploadSong(req, res) {
  const songBuffer = req.file.buffer;
  const { mood } = req.body;
  const tags = id3.read(songBuffer);

  const [songFile, posterFile] = await Promise.all([
    storageService.uploadFile({
      buffer: songBuffer,
      filename: tags.title,
      folder: "/moodify/songs",
    }),
    storageService.uploadFile({
      buffer: tags.image.imageBuffer,
      filename: tags.title + ".jpeg",
      folder: "/moodify/posters",
    }),
  ]);

  const song = await songModel.create({
    title: tags.title,
    url: songFile.url,
    posterUrl: posterFile.url,
    mood: mood,
  });

  res.status(201).json({
    message: "song created successfuly",
    song,
  });
}

async function getSong(req, res) {
  const { mood } = req.query;

  const response = await songModel.aggregate([
    { $match: { mood: mood } },
    { $sample: { size: 1 } },
  ]);
  const random = response[0]
  res.status(200).json({
    message: "song fetched successfully",
    random,
  });
}

module.exports = { uploadSong, getSong };
