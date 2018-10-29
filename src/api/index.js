import config from './config';

const {
  apikey
} = config;
const url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${apikey}&format=json`;

export default function getArtistis(country) {
  return fetch(url.replace(':country', country))
    .then(res => res.json())
    .then(json => json.topartists.artist)
    .catch(err => console.log(err));
}
