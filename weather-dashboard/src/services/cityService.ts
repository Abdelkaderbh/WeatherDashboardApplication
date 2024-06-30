import axios from 'axios';
const GEOCODE_URL = 'https://geocode.maps.co/search?q=address&api_key=66807c7ef00af529138391ykc5219de';

interface Coordinates {
  latitude: number;
  longitude: number;
}

export const fetchCoordinates = async (city: string): Promise<Coordinates> => {
  const response = await axios.get(GEOCODE_URL, {
    params: {
      q: city,
    },
  });
  const data = response.data[0];
  return { latitude: data.lat, longitude: data.lon };
};
