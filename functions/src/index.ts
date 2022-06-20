import * as functions from 'firebase-functions';
import express from 'express';

// routes
import spotify from './routes/spotify';

const app = express();

app.use('/spotify', spotify);

exports.api = functions.region('asia-northeast3').https.onRequest(app);
