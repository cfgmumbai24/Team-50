// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import Chart from 'chart.js/auto';


// const LineCharts = () => {

//   const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         label: 'Group A',
//         borderColor: 'rgb(255, 99, 132)',
//         data: [65, 59, 80, 81, 56, 55, 40],
//       },
//       {
//         label: 'Group B',
//         borderColor: 'rgb(54, 162, 235)',
//         data: [28, 48, 40, 19, 86, 27, 90],
//       },
//       {
//         label: 'Group C',
//         borderColor: 'rgb(255, 205, 86)',
//         data: [45, 25, 67, 12, 78, 45, 30],
//       },
//       {
//         label: 'Group D',
//         borderColor: 'rgb(75, 192, 192)',
//         data: [15, 45, 32, 60, 32, 75, 21],
//       },
//     ],
//   };

//   return (
//     <>
//     <div className="line-charts">
//       <h2>Class Progress</h2>
//       <div className="chart-container">
//         <Line data={data}  />
//       </div>
//     </div>
//     <div className="line-charts">
//     <h2>Class Progress</h2>
//     <div className="chart-container">
//       <Line data={data}  />
//     </div>


//   </div>
//   </>
//   );
// };

// export default LineCharts;
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';
import Navbar from './components/navbar';
import './LineCharts.css'; // Import the CSS file for styling

const LineCharts = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Group A',
        borderColor: 'rgb(255, 99, 132)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: 'Group B',
        borderColor: 'rgb(54, 162, 235)',
        data: [28, 48, 40, 19, 86, 27, 90],
      },
      {
        label: 'Group C',
        borderColor: 'rgb(255, 205, 86)',
        data: [45, 25, 67, 12, 78, 45, 30],
      },
      {
        label: 'Group D',
        borderColor: 'rgb(75, 192, 192)',
        data: [15, 45, 32, 60, 32, 75, 21],
      },
    ],
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="line-charts-container">
        <h2>Class Progress</h2>
        <div className="chart-grid">
          <div className="chart-item">
            <Line data={data} />
            <Link to="./student"> Class 1</Link>
          </div>
          <div className="chart-item">
            <Line data={data} />
            <Link to="./student"> Class 2</Link>
          </div>
          <div className="chart-item">
            <Line data={data} />
            <Link to="./student"> Class 3</Link>
          </div>
          <div className="chart-item">
            <Line data={data} />
            <Link to="./student"> Class 4</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LineCharts;
