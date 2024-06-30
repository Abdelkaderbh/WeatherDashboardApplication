import React from "react";
import "./App.css";
import WeatherForm from "./components/WeatherForm";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const App = () => {
  return (
    <div>
      <h1 className="title"> Weather Application </h1>
      <WeatherForm />
    </div>
  );
};

export default App;
