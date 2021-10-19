import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import React from 'react';

const Footer = () => {
    return (
      <div className="m-auto bg-dark text-light py-4" >
        <h1>
          <FontAwesomeIcon icon={faDumbbell} />
          <span> Hercules Fitness</span>
        </h1>
        <p>contact us : +8801741940589</p>
        <small>copyright reserved</small>
      </div>
    );
};

export default Footer;