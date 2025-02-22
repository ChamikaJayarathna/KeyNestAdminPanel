import React, { useEffect, useState } from 'react';
import apiRequest from '../lib/apiRequest';
import { useParams } from 'react-router-dom';

const SingleProperty = () => {

    const { id } = useParams();
    const [properties, setProperties] = useState([]);

    const fetchSingleProperties = async () => {
        try {
          const res = await apiRequest.get(`/property/get-single-property/${id}`);
          setProperties(res.data);
        } catch (error) {
          console.log(error);
        }
    }      

    useEffect(() => {
        fetchSingleProperties();
    },[id]);

  return (
    <div className='app-content mt-5'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card">
              <div id="carouselExampleIndicators2" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                  <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to={1} aria-label="Slide 2" />
                  <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={properties.images} className="card-img" alt="Slide 1" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" id="title" name="title" className="form-control" value={properties.title} />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input id="price" name="price" type="number" className="form-control" value={properties.price} />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input id="address" name="address" type="text" className="form-control" value={properties.address} />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <textarea className="form-control" id="desc" rows="3" value={properties.description}></textarea>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="city" className="form-label">City</label>
                      <input id="city" name="city" type="text" className="form-control" value={properties.city}/>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="bedroom" className="form-label">Bedroom Number</label>
                      <input min={1} id="bedroom" name="bedroom" type="number" className="form-control" value={properties.bedroom}/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="type" className="form-label">Type</label>
                      <input id="type" name="type" type="text" className="form-control" value={properties.type}/>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="property" className="form-label">Property</label>
                      <input id="property" name="property" type="text" className="form-control" value={properties.property}/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="utilities" className="form-label">Utilities Policy</label>
                      <input id="utilities" name="utilities" type="text" className="form-control" value={properties.utilities}/>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="pet" className="form-label">Pet Policy</label>
                      <input id="pet" name="pet" type="text" className="form-control" value={properties.pet} />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProperty;
