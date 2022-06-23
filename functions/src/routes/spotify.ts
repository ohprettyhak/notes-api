import express from 'express';

import getTopArtists from '../libs/spotify/getTopArtists';
import getTopTracks from '../libs/spotify/getTopTracks';

const router = express.Router();

router.get('/top_artists', async function (req, res) {
  const data = await getTopArtists();
  res.json(data);
});

router.get('/top_tracks', async function (req, res) {
  const data = await getTopTracks();
  res.json(data);
});

export = router;
