import express from 'express';

import getRecentlyRead from '../libs/book/getRecentlyRead';

const router = express.Router();

router.get('/recently_read', function (req, res) {
  const data = getRecentlyRead();
  res.json(data);
});

export = router;
