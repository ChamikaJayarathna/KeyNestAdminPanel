import React from 'react';

const SingleProperty = () => {
  return (
    <div className='app-content'>
        <div className="card">
            <div id="carouselExampleIndicators2" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="..." className="card-img" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="..." className="card-img" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="..." className="card-img" alt="..." />
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
            <div className="card-content">
                <div className="card card-primary card-outline mb-4">
                    <form>
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

  );
}

export default SingleProperty;