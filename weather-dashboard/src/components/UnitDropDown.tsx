import React,{useState} from 'react'
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

interface Unit {
    name: string;
}
        
const UnitDropDown = () => {
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const units: Unit[] = [
      { name: 'Celsius' },
      { name: 'Fahrenheit' },
  
  ];
  return (
      <div className="card flex justify-content-center">
          <Dropdown value={selectedUnit} onChange={(e: DropdownChangeEvent) => setSelectedUnit(e.value)} options={units} optionLabel="name" 
              placeholder="Select a Unit" className="w-full md:w-14rem" />
      </div>
  )
}

export default UnitDropDown