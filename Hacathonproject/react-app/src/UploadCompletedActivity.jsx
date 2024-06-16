import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure you have axios installed
import './activities1.css';

const UploadCompletedActivity = () => {
  const navigate = useNavigate();
  const [activity, setActivity] = useState({
    class: '',
    category: '',
    name: '',
    video: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setActivity({ ...activity, [name]: files[0] });
    } else {
      setActivity({ ...activity, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const formData = new FormData();
    // formData.append('class', activity.class);
    // formData.append('category', activity.category);
    // formData.append('name', activity.name);
    // formData.append('video', activity.video);
    navigate('/show-activities');

  }


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload Completed Activity</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-medium mb-2">Select Class</label>
          <select
            name="class"
            value={activity.class}
            onChange={handleChange}
            className="block w-full border p-2"
            required
          >
            <option value="">Select Class</option>
            {[1, 2, 3, 4, 5].map((cls) => (
              <option key={cls} value={cls}>{`Class ${cls}`}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Select Category</label>
          <select
            name="category"
            value={activity.category}
            onChange={handleChange}
            className="block w-full border p-2"
            required
          >
            <option value="">Select Category</option>
            {['A', 'B', 'C', 'D'].map((cat) => (
              <option key={cat} value={cat}>{`Category ${cat}`}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Activity Name</label>
          <input
            type="text"
            name="name"
            value={activity.name}
            onChange={handleChange}
            className="block w-full border p-2"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Upload Video</label>
          <input
            type="file"
            name="video"
            accept="video/*"
            onChange={handleChange}
            className="block w-full border p-2"
            required
          />
        </div>
        <div className="flex space-x-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadCompletedActivity;
