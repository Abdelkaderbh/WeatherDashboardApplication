import axios from 'axios';

const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

interface WeatherData {
  temperature: number;
}

export const fetchWeatherData = async (latitude: number, longitude: number, unit: string, days: number): Promise<WeatherData> => {
  const response = await axios.get(BASE_URL, {
    params: {
      latitude,
      longitude,
      hourly: 'temperature_2m',
      daily: 'temperature_2m_max,temperature_2m_min',
      temperature_unit: unit,
      timezone: 'auto',
      start: new Date().toISOString().split('T')[0],
      end: new Date(new Date().setDate(new Date().getDate() + days)).toISOString().split('T')[0],
    },
  });
  return response.data;
};
