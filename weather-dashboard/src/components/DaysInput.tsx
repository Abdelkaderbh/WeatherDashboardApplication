import React, { useState } from "react";
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';

const DaysInput = () => {
  const [value, setValue] = useState<number>(50);

  return (
  <div className="card flex justify-content-center">
    <InputNumber value={value} onValueChange={(e: InputNumberValueChangeEvent) => setValue(e.value as number)} min={0} max={30} defaultValue={10} />
  </div>
  )
}

export default DaysInput