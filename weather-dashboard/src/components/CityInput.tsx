import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { fetchCoordinates } from "../services/cityService";

interface CityInputProps {
  onCoordinatesChange: (coords: {
    latitude: number;
    longitude: number;
  }) => void;
}

const CityInput: React.FC<CityInputProps> = ({ onCoordinatesChange }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value) {
      const fetchCoords = async () => {
        try {
          const coords = await fetchCoordinates(value);
          onCoordinatesChange(coords);
        } catch (error) {
          console.error("Error fetching coordinates:", error);
        }
      };
      fetchCoords();
    }
  }, [value, onCoordinatesChange]);

  return (
    <div className="card flex justify-content-center">
      <FloatLabel>
        <InputText
          id="city"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
        <label htmlFor="city">City Name</label>
      </FloatLabel>
    </div>
  );
};

export default CityInput;
