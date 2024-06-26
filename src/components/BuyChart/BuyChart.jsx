import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BuyChart = () => {
    const data = {
        labels: ['15/01', '17/01', '18/01', '25/04'],
        datasets: [
            {
                label: 'Price (DOGE)',
                data: [1100, 900, 600, 300],
                backgroundColor: '#ff8600',
                barPercentage: 0.5,
                categoryPercentage: 0.5,
                borderRadius: 8,
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false  // Ensures the legend will not be displayed
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                position: 'right',
                grid: {
                    display: true,
                    color: 'grey',
                },
                ticks: {
                    color: 'darkgray'
                }
            },
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: 'darkgray',
                }
            }
        }
    };

    return (
        <div style={{ width: '100%', height: '200px' }}>
            <h1>Price History</h1>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BuyChart;
