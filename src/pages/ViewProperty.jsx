import React, { useEffect, useState } from 'react';
import apiRequest from '../lib/apiRequest';

const ViewProperty = () => {

  const [properties, setProperties] = useState([]);

  const fetchAllProperties = async () => {
    try {
      const res = await apiRequest.get('/property/get-all-property')
      setProperties(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllProperties();
  },[]);

  return (
    <div className="app-content mt-4">
      <div className='container-fluid'>
        <div className="card mb-4">
          <div className="card-header mt-2">
            <h3 className="card-title">View All Property</h3>
            <div className="card-tools">
              <ul className="pagination pagination-sm float-end">
                <li className="page-item"><a className="page-link" href="#">«</a></li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">»</a></li>
              </ul>
            </div>
          </div>

          <div className="card-body p-0">
            <table className="table">
              <thead>
                <tr>
                  <th style={{width: 10}}>#</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Address</th>
                  <th>Description</th>
                  <th>City</th>
                  <th>Bedroom Number</th>
                  <th>Type</th>
                  <th>Property</th>
                  <th>Utilities Policy</th>
                  <th>Pet Policy</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((property, index) => (
                  <tr key={property._id} className="align-middle">
                    <td>{index + 1}</td>
                    <td>{property.title}</td>
                    <td>{property.price}</td>
                    <td>{property.address}</td>
                    <td>{property.description}</td>
                    <td>{property.city}</td>
                    <td>{property.bedroom}</td>
                    <td>{property.type}</td>
                    <td>{property.property}</td>
                    <td>{property.utilities}</td>
                    <td>{property.pet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ViewProperty;