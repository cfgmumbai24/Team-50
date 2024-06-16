import React, { useState } from 'react';
import './activities1.css'

const AddActivity = () => {
  const [activity, setActivity] = useState({
    class: '',
    category: '',
    name: '',
    images: null,
    video: null,
    instructions: '',
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
    // Handle form submission
    console.log('Activity submitted:', activity);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Activity</h1>
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
          <label className="block text-lg font-medium mb-2">Add Images</label>
          <input
            type="file"
            name="images"
            accept="image/*"
            onChange={handleChange}
            className="block w-full border p-2"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Add Video</label>
          <input
            type="file"
            name="video"
            accept="video/*"
            onChange={handleChange}
            className="block w-full border p-2"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Text Instructions</label>
          <textarea
            name="instructions"
            value={activity.instructions}
            onChange={handleChange}
            className="block w-full border p-2"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Save
        </button>
      </form>
    </div>
  );
};

export default AddActivity;
