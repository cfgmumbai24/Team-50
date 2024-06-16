import React from 'react';
import { Line } from 'react-chartjs-2';

const MultiLineCharts = () => {
    // Data for each line chart
    const data1 = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'red',
            },
            {
                label: 'Dataset 3',
                data: [45, 25, 16, 70, 40, 55, 30],
                fill: false,
                borderColor: 'green',
            }
        ],
    };

    const data2 = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Dataset 2',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                borderColor: 'blue',

            },
            {
                label: 'Dataset 3',
                data: [45, 25, 16, 70, 40, 55, 30],
                fill: false,
                borderColor: 'green',
            }

        ],
    };

    const data3 = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Dataset 3',
                data: [45, 25, 16, 70, 40, 55, 30],
                fill: false,
                borderColor: 'green',
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <div className="multi-line-charts">
            <div className="chart-container">
                <Line data={data1} options={options} />
            </div>
            <div className="chart-container">
                <Line data={data2} options={options} />
            </div>
            <div className="chart-container">
                <Line data={data3} options={options} />
            </div>
        </div>
    );
};

export default MultiLineCharts;
