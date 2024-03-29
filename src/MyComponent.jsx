import { useState } from "react";

const MyComponent = () => {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCars((c) => [...c, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  };
  const handleRemoveCar = (index) => {
    setCars((c) => c.filter((_, i) => i !== index));
  };
  const handleYearChange = (event) => {
    setCarYear(event.target.value);
  };
  const handleMakeChange = (event) => {
    setCarMake(event.target.value);
  };
  const handleModelChange = (event) => {
    setCarModel(event.target.value);
  };
  return (
    <>
      <h2>List of car objects:</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>

      <input
        type="number"
        value={carYear}
        onChange={handleYearChange}
        name=""
        id=""
      />
      <input
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        name=""
        id=""
        placeholder="Enter car Make"
      />
      <input
        type="text"
        value={carModel}
        onChange={handleModelChange}
        name=""
        id=""
        placeholder="Enter car Model"
      />
      <button onClick={handleAddCar}>Add Car</button>
    </>
  );
};

export default MyComponent;
