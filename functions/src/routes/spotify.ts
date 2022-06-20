import express from 'express';

import getTopArtists from '../libs/spotify/getTopArtists';
import getTopTracks from '../libs/spotify/getTopTracks';

const router = express.Router();

router.get('/artists', async function (req, res) {
  res.json(await getTopArtists());
});

router.get('/tracks', async function (req, res) {
  res.json(await getTopTracks());
});

export = router;
