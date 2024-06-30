import React from "react";
import { Card } from "primereact/card";
import { WeatherData } from "../services/weatherService";
import "./weatherCard.css";

interface WeatherCardProps {
  weather: WeatherData | null;
  unit:string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather,unit  }) => {
  const CardStyle = () => {
    if (weather && weather.isDay) {
      return { width: "20%", backgroundColor: "#b3e5fc", color: "#fff" };
    } else {
      return { width: "20%", backgroundColor: "#263238", color: "#fff" };
    }
  };
  return (
    <Card style={CardStyle()}>
      {weather ? (
        <>
          {weather.isDay ? (
            <i
              className="pi pi-sun"
              style={{ fontSize: "2rem", color: "yellow" }}
            ></i>
          ) : (
            <i
              className="pi pi-moon"
              style={{ fontSize: "2rem", color: "white" }}
            ></i>
          )}
          <div className="text">
            <p>Temperature: {weather.temperature} °{unit === 'celsius' ? 'C' : 'F'} </p>
            <p>Wind Speed: {weather.windSpeed} km/h </p>
            <p>Humidity : {weather.humidity} % </p>
            <p> Rain : {weather.rain} m/s </p>
          </div>
        </>
      ) : (
        <p>Choose a City First</p>
      )}
    </Card>
  );
};

export default WeatherCard;
