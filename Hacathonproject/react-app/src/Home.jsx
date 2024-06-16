import React from 'react';
import Card from './Card';
import './activities1.css';
import Navbar from './components/navbar';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <Navbar />
    <br /><br />
    <main className="flex-1 flex flex-col items-center justify-center p-4">
      <div className="flex space-x-4 mt-4">

        <Link to="/show-activities"> <Card title="Show Activity" /></Link>
        <Link to="/upload-completed-activity"><Card title="Upload Completed Activities" /></Link>
      </div>
    </main>
  </>
);

export default Home;
