import axios from '../plugins/axios';

export const getLocations = async () => {
  const { data } = await axios.get('location');
  return data.results;
};

export const getLocation = async (id) => {
  const { data } = await axios.get(`location/${id}`);
  return data;
};

export const getCharacter = async (id) => {
  const { data } = await axios.get(`character/${id}`);
  return data;
};
