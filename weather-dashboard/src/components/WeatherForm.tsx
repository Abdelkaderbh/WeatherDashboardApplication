import React, { useState, useCallback } from "react";
import CityInput from "./CityInput";
import UnitDropDown from "./UnitDropDown";
import DaysInput from "./DaysInput";
import './Form.css'

const WeatherForm = () => {
  const [coordinates, setCoordinates] = useState<{ latitude: number; longitude: number } | null>(null);

  const handleCoordinatesChange = useCallback((coords: { latitude: number; longitude: number }) => {
    setCoordinates(coords);
    console.log('Fetched coordinates:', coords); 
  }, []);

  return (
    <div className="inputs-container">
      <CityInput onCoordinatesChange={handleCoordinatesChange} />
      <UnitDropDown />
      <DaysInput />
    </div>
  );
};

export default WeatherForm;
