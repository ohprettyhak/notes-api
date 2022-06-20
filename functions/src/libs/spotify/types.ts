export interface accessTokenType {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}

export interface artistDataType {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface topArtistsType {
  name: string;
  image: string;
  link: string;
}

export interface trackDataType {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIDS;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface topTracksType {
  title: string;
  artist: string;
  image: string;
  link: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Followers {
  href: string | null;
  total: number;
}

export interface Image {
  height: number;
  width: number;
  url: string;
}

export interface Album {
  album_type: string;
  artists: string[];
  available_markets: string[];
  external_urls: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: Date;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface ExternalIDS {
  isrc: string;
}

export interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}
