import React from "react";
import People from "../../assets/images/people.svg";
import fuel from "../../assets/images/fuel-pump.svg";
import clock from "../../assets/images/clock.svg";
import love from "../../assets/images/heart.svg";
import "./index.css";

const CarList = ({ cars }) => {
  return (
    <div className="car-list">
      {cars.map((car) => (
        <div className="car-card" key={car.id}>
          <img src={car.imageUrl} alt="car-logo" className="ima" />
          <div className="btn-cont">
            <h3 className="na">{car.name}</h3>
            <button className="bt-y">{car.year}</button>
          </div>
          <div className="cap-cont">
            <img src={People} alt="capacity" className="cap" />
            <p5 className="p-cap">{car.capacity}</p5>
            <img src={fuel} alt="fuel" className="f-cap" />
            <p5 className="pp">{car.fuel}</p5>
          </div>
          <div className="cap-cont">
            <img src={clock} alt="clock" className="pp-cap" />
            <p5 className="p-capp">{car.time}</p5>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTpm9ypHPMm5exykO4S4Vuhtj4giebZR35DzS3YwyDDA&s"
              alt="steer"
              className="str"
            />
            <p5 className="pp-2">{car.type}</p5>
          </div>
          <br />
          <hr />
          <p2 className="pr">
            {car.price} <span className="sp">/month</span>
          </p2>

          <img src={love} alt="love" className="lo" />
          <div className="b"> 
            <button className="bt">Rent now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;
