import React from 'react';
import './form.css';
import { useNavigate } from 'react-router-dom';

import Navbar from './components/navbar';
const FormComponent = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/test')
    // Handle form submission logic here

  }


  return (
    <>
      <Navbar />
      <div className="form-container">
        <h1 className="form-heading">Numeric Data</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="form-label">Name:</label>
            <input type="text" className="form-control" required />
          </div>
          <div>
            <label className="form-label">Category:</label>
            <input type="text" className="form-control" required />
          </div>
          <div>
            <label className="form-label">Class:</label>
            <input type="text" className="form-control" required />
          </div>
          <div>
            <label className="form-label">Marks:</label>
            <input type="number" className="form-control" required />
          </div>
          <div>
            <label className="form-label">Comments:</label>
            <textarea className="form-control" rows="3" required></textarea>
          </div>

          <div className="form-upload">
            <input type="file" id="file-upload" />
            <label htmlFor="file-upload">Upload</label>
          </div>
          <div>
            <button type="submit" className="form-button">Submit</button>
          </div>

        </form>
      </div>
    </>
  );
}

export default FormComponent;
