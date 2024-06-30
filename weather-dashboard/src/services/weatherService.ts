import axios from 'axios';

const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

export interface WeatherData {
  temperature: number;
  isDay: boolean;
  precipitation: number;
  rain: number;
  windSpeed: number;
  humidity: number;
}

export const fetchWeatherData = async (latitude: number, longitude: number, unit: string, days: number): Promise<WeatherData> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        latitude,
        longitude,
        current: 'temperature_2m,is_day,precipitation,rain,wind_speed_10m,relative_humidity_2m',
        temperature_unit: unit,
        timezone: 'auto',
        start: new Date().toISOString().split('T')[0],
        end: new Date(new Date().setDate(new Date().getDate() + days)).toISOString().split('T')[0],
      },
    });

    const data = response.data.current;

    return {
      temperature: data.temperature_2m,
      isDay: data.is_day,
      precipitation: data.precipitation,
      rain: data.rain,
      windSpeed: data.wind_speed_10m,
      humidity: data.relative_humidity_2m,
    };
  } catch (error) {
    throw new Error('Error fetching weather data');
  }
};
