import React, { useEffect, useState } from "react";
import Sarvice from "../Service/Sarvice";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./databse.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container">
      <h2 className="my-5 py-2 w-25 mx-auto" style={{ borderBottom: "5px solid #598eff" }}>
        Services
      </h2>
      <div className="row mx-auto">
        {services.map((service) => (
          <Sarvice service={service}></Sarvice>
        ))}
      </div>
    </div>
  );
};

export default Services;
