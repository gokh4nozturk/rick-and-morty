import { Location, Character } from '../model';
import axios from '../plugins/axios';

export const getLocations = async () => {
  const { data } = await axios.get('location');
  return data.results.map((result) => new Location(result));
};

export const getLocation = async (id) => {
  const { data } = await axios.get(`location/${id}`);
  return new Location(data);
};

export const getCharacter = async (id) => {
  const { data } = await axios.get(`character/${id}`);
  return new Character(data);
};
