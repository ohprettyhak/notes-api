import * as functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';

// routes
import spotify from './routes/spotify';
import book from './routes/book';

// express settings
const app = express();
app.use(cors());

app.use('/spotify', spotify);
app.use('/book', book);

exports.api = functions.region('asia-northeast3').https.onRequest(app);
