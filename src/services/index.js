import { Location, Character, Pagination } from '../model';
import axios from '../plugins/axios';

export const getLocations = async (params) => {
  const { data } = await axios.get('location', { params });
  return {
    locations: data.results.map((location) => new Location(location)),
    pagination: new Pagination(data.info)
  };
};

export const getLocation = async (id) => {
  const { data } = await axios.get(`location/${id}`);
  return new Location(data);
};

export const getCharacter = async (id) => {
  const { data } = await axios.get(`character/${id}`);
  return new Character(data);
};
