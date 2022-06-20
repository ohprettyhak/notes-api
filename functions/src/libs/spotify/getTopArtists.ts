import superagent from 'superagent';

import getAccessToken from './getAccessToken';
import { artistDataType, topArtistsType } from './types';

const TOP_ARTISTS_ENDPOINT = `https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=4`;

const getTopArtists = async (): Promise<topArtistsType[]> => {
  const { access_token } = await getAccessToken();

  const response = await superagent
    .get(TOP_ARTISTS_ENDPOINT)
    .set('Authorization', `Bearer ${access_token}`);

  const { items } = response.body;

  const artists: topArtistsType[] = items.map((artist: artistDataType) => ({
    name: artist.name,
    image: artist.images[0].url,
    link: artist.external_urls.spotify,
  }));

  return artists;
};

export default getTopArtists;
