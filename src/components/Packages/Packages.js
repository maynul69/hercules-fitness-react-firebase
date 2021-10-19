import React from 'react';
import { Table } from 'react-bootstrap';

const Packages = () => {
    return (
      <div>
        <h2>Our Packages</h2>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              
              <th>Package Name</th>
              <th>Cost</th>
              <th>Length(Days)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              
              <td>Monthly </td>
              <td>5000</td>
              <td>26 days</td>
            </tr>
            <tr>
              
              <td>Quater Year</td>
              <td>13000</td>
              <td>78 days</td>
            </tr>
            <tr>
              
              <td>Half Yearly</td>
              <td>26000</td>
              <td>156 days</td>
            </tr>
            <tr>
              
              <td>Yearly</td>
              <td>50000</td>
              <td>312 days</td>
            </tr>
            
          </tbody>
        </Table>
      </div>
    );
};

export default Packages;