import React, { useEffect, useState } from "react";
import Sarvice from "../Service/Sarvice";
import './services.css'

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./databse.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container">
      <h2 className="my-5 py-2 w-25 mx-auto" style={{ borderBottom: "5px solid #598eff" }}>
        Services
      </h2>
      <div className="row serviceWrapper">
        {services.map((service) => (
          <Sarvice service={service}></Sarvice>
        ))}
      </div>
    </div>
  );
};

export default Services;
