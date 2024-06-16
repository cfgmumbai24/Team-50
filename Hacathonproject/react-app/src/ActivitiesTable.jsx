import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoModal from './VideoModal';
import './activities1.css';
import Navbar from './components/navbar';

const activities = [
  { name: 'Activity 1', videoUrl: 'path/to/video1.mp4' },
  { name: 'Activity 2', videoUrl: 'path/to/video2.mp4' },
  { name: 'Activity 3', videoUrl: 'path/to/video3.mp4' },
];

const ActivitiesTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

  const handleShowVideo = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Activities</h1>
          <Link to="/add-activity" className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Activity
          </Link>
        </div>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Activity</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border">{activity.name}</td>
                <td className="py-2 px-4 border">
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                    onClick={() => handleShowVideo(activity.videoUrl)}
                  >
                    Show Video
                  </button>
                  <button className="bg-green-500 text-white px-2 py-1 rounded mr-2">Edit Activity</button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <VideoModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          videoUrl={currentVideoUrl}
        />
      </div>
    </>
  );

};

export default ActivitiesTable;
