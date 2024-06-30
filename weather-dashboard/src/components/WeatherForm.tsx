import React, { useState, useCallback } from 'react';
import { Button } from 'primereact/button';
import WeatherCard from './WeatherCard';
import CityInput from './CityInput';
import UnitDropDown from './UnitDropDown';
import DaysInput from './DaysInput';
import { useWeatherData } from '../hooks/WeatherData';
import './Form.css';

const WeatherForm: React.FC = () => {
  const [coordinates, setCoordinates] = useState<{ latitude: number; longitude: number } | null>(null);
  const [unit, setUnit] = useState<string>('celsius');
  const { weather, loading, error, getWeatherData } = useWeatherData();

  const handleCoordinatesChange = useCallback((coords: { latitude: number; longitude: number }) => {
    setCoordinates(coords);
    console.log('Fetched coordinates:', coords);
  }, []);

  const handleUnitChange = (selectedUnit: string) => {
    setUnit(selectedUnit);
  };

  const handleFetchWeather = () => {
    if (coordinates) {
      const { latitude, longitude } = coordinates;
      getWeatherData(latitude, longitude, unit, 7);
    }
  };

  return (
    <>
      <div className="inputs-container">
        <CityInput onCoordinatesChange={handleCoordinatesChange}  />
        <UnitDropDown selectedUnit={unit} onUnitChange={handleUnitChange} />
        <DaysInput />
        <Button label="Search" icon="pi pi-search" onClick={handleFetchWeather} />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="weather-card">
        <WeatherCard weather={weather} unit={unit} />
      </div>
    </>
  );
};

export default WeatherForm;
