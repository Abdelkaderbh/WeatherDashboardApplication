import React,{useState} from 'react'
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

interface Unit {
    selectedUnit: string;
    onUnitChange: (unit: string) => void;
}
        
const UnitDropDown: React.FC<Unit> = ({ selectedUnit, onUnitChange }) => {
  const units = [
    { label: 'Celsius', value: 'celsius' },
    { label: 'Fahrenheit', value: 'fahrenheit' },
  ];
  return (
      <div className="card flex justify-content-center">
    <Dropdown
      value={selectedUnit}
      options={units}
      onChange={(e) => onUnitChange(e.value)}
      placeholder="Select Unit"
    />
      </div>
  )
}

export default UnitDropDown