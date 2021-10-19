import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    
    const {name}=useParams();
    const [service, setService] = useState({});
    
    useEffect(() => {
      fetch("http://localhost:3000/databse.json")
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((data) => {
          const filteredService = data.filter(
            (service) => service.name === name
          );
          setService({ ...filteredService[0] });
          console.log(data);
        })
        .catch((error) => console.log(error));

    }, [name]);

    
    
    return (
      <div className='container'>
        <h2>{service.name}</h2>
        <img width='20%' src={service.img} alt="" />
        <p>{service.description}</p>
      </div>
    );
};

export default ServiceDetail;