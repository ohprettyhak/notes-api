import superagent from 'superagent';

import getAccessToken from './getAccessToken';
import { topTracksType, trackDataType } from './types';

const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=4`;

const getTopTracks = async (): Promise<topTracksType[]> => {
  const { access_token } = await getAccessToken();

  const response = await superagent
    .get(TOP_TRACKS_ENDPOINT)
    .set('Authorization', `Bearer ${access_token}`);

  const { items } = response.body;

  const tracks: topTracksType[] = items.map((track: trackDataType) => ({
    title: track.name,
    artist: track.artists.map((_artist) => _artist.name).join(', '),
    image: track.album.images[0].url,
    link: track.external_urls.spotify,
  }));

  return tracks;
};

export default getTopTracks;
