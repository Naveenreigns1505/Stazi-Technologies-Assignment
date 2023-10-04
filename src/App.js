import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, and Route
import "./App.css";
import cars from "./components/CarData";
import CarList from "./components/CarList";
import Pagination from "./components/Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCarName, setSelectedCarName] = useState("");

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;

  const filteredCarsByCarName =
    selectedCarName === ""
      ? cars
      : cars.filter((car) => car.name === selectedCarName);

  const filteredCarsBySearch = filteredCarsByCarName.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentCars = filteredCarsBySearch.slice(
    indexOfFirstCar,
    indexOfLastCar
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const uniqueCarNames = ["", ...new Set(cars.map((car) => car.name))];

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleCarNameChange = (e) => {
    setSelectedCarName(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <div className="App">
        <header className="header">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for cars..."
              value={searchTerm}
              onChange={handleSearchInputChange}
            />
            <select value={selectedCarName} onChange={handleCarNameChange}>
              {uniqueCarNames.map((carName, index) => (
                <option key={index} value={carName}>
                  {carName || "All Cars"}
                </option>
              ))}
            </select>
          </div>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <CarList cars={currentCars} />
                <Pagination
                  carsPerPage={carsPerPage}
                  totalCars={filteredCarsBySearch.length}
                  paginate={paginate}
                />
              </div>
            }
          />

          <Route
            path="/page/:page"
            element={
              <div>
                <CarList cars={currentCars} />
                <Pagination
                  carsPerPage={carsPerPage}
                  totalCars={filteredCarsBySearch.length}
                  paginate={paginate}
                />
              </div>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
