import superagent from 'superagent';

import { accessTokenType } from './types';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async (): Promise<accessTokenType> => {
  const response = await superagent
    .post(TOKEN_ENDPOINT)
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', `Basic ${basic}`)
    .send({ grant_type: 'refresh_token', refresh_token });

  return response.body;
};

export default getAccessToken;
