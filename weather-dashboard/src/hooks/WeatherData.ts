import { useState } from 'react';
import { fetchWeatherData, WeatherData } from '../services/weatherService';

export const useWeatherData = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getWeatherData = async (latitude: number, longitude: number, unit: string, days: number) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeatherData(latitude, longitude, unit, days);
      setWeather(data);
    } catch (err) {
      setError('Error fetching weather data');
    } finally {
      setLoading(false);
    }
  };

  return { weather, loading, error, getWeatherData };
};
