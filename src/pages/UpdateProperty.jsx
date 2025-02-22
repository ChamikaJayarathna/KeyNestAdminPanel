import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import ReactQuill from "react-quill-new";

const UpdateProperty = () => {

  const [value, setValue] = useState("");

  return (
    <>
      <Toaster />
      <div className="d-flex justify-content-center align-items-center min-vh-100 mt-3 mb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="card card-warning card-outline shadow">
                <div className="card-header">
                  <div className="card-title">Update Property</div>
                </div>
                <form className="needs-validation p-4" noValidate>
                  <div className="row g-3">
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">
                        Title
                      </label>
                      <input type="text" id="title" name="title" className="form-control" required />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="price" className="form-label">
                        Price
                      </label>
                      <input id="price" name="price" type="number" className="form-control" required />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">
                        Address
                      </label>
                      <input id="address" name="address" type="text" className="form-control" required />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="images" className="form-label">Images</label>
                      <div className="input-group">
                        <input
                          type="file"
                          className="form-control"
                          id="upload"
                          accept="image/*"
                          multiple
                        />
                        <label className="input-group-text" htmlFor="upload">Upload</label>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="desc" className="form-label">
                        Description
                      </label>
                      <ReactQuill theme="snow" value={value} onChange={setValue} />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="city" className="form-label">
                        City
                      </label>
                      <input id="city" name="city" type="text" className="form-control" />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="bedroom" className="form-label">
                        Bedroom Number
                      </label>
                      <input min={1} id="bedroom" name="bedroom" type="number" className="form-control" />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="type" className="form-label">
                        Type
                      </label>
                      <select className="form-select" name="type" required>
                        <option value="rent" defaultChecked>Rent</option>
                        <option value="buy">Buy</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="property" className="form-label">
                        Property
                      </label>
                      <select className="form-select" name="property" required>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="land">Land</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="utilities" className="form-label">
                        Utilities Policy
                      </label>
                      <select className="form-select" name="utilities" required>
                        <option value="owner">Owner is responsible</option>
                        <option value="tenant">Tenant is responsible</option>
                        <option value="shared">Shared</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="pet" className="form-label">
                        Pet Policy
                      </label>
                      <select className="form-select" name="pet" required>
                        <option value="allowed">Allowed</option>
                        <option value="not-allowed">Not Allowed</option>
                      </select>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between mt-4">
                    <button className="btn btn-warning" type="submit">
                      Update Property
                    </button>
                    <button type="button" className="btn btn-success">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateProperty;