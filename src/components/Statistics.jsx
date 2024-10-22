import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend);

const Statistics = () => {
  const thesisData = [
    { title: 'Thesis Title 1', views: 250, downloads: 100 },
    { title: 'Thesis Title 2', views: 150, downloads: 50 },
    { title: 'Thesis Title 3', views: 300, downloads: 200 },
    { title: 'Thesis Title 4', views: 180, downloads: 90 },
  ];

  // Data for the bar chart (Views vs Downloads)
  const barChartData = {
    labels: thesisData.map((thesis) => thesis.title),
    datasets: [
      {
        label: 'Views',
        data: thesisData.map((thesis) => thesis.views),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Downloads',
        data: thesisData.map((thesis) => thesis.downloads),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Data for the pie chart (Total Views and Downloads)
  const pieChartData = {
    labels: ['Views', 'Downloads'], // Labels for the pie chart
    datasets: [
      {
        data: [
          thesisData.reduce((acc, curr) => acc + curr.views, 0), // Total views
          thesisData.reduce((acc, curr) => acc + curr.downloads, 0), // Total downloads
        ],
        backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  // Pie chart options to ensure proper label display
  const pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true, // Show the legend
        position: 'bottom', // Place the legend below the chart
        labels: {
          color: 'white', // Legend label color
          font: {
            size: 14, // Label font size
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            // Show labels and percentage in tooltips
            const label = tooltipItem.label || '';
            const value = tooltipItem.raw;
            const total = tooltipItem.dataset.data.reduce((acc, curr) => acc + curr, 0);
            const percentage = ((value / total) * 100).toFixed(2);
            return `${label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <>
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-400 text-center">Thesis Statistics Dashboard</h2>

        {/* Flexbox container for Bar Chart and Pie Chart */}
        <div className="flex flex-wrap justify-around mt-10 max-w-6xl mx-auto">
          {/* Bar Chart for Thesis Views and Downloads */}
          <div className="bg-neutral p-6 rounded-lg shadow-lg w-full md:w-1/2 mb-6">
            <h3 className="text-2xl font-bold text-gray-300 mb-4 text-center">Views vs Downloads (Bar Chart)</h3>
            <Bar data={barChartData} options={{ responsive: true }} />
          </div>

          {/* Pie Chart for Total Views and Downloads */}
          <div className="bg-neutral p-6 rounded-lg shadow-lg w-full md:w-1/2 mb-6">
            <h3 className="text-2xl font-bold text-gray-300 mb-4 text-center">Overall Views vs Downloads (Pie Chart)</h3>
            <Pie data={pieChartData} options={pieChartOptions} />
          </div>
        </div>

        {/* Thesis Table (As a detailed view) */}
        <div className="mt-10 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-300 mb-4">Thesis Data (Detailed View)</h3>
          <table className="table-auto w-full bg-neutral shadow-lg shadow-indigo-500/50 rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Thesis Title</th>
                <th className="py-3 px-4 text-left">Views</th>
                <th className="py-3 px-4 text-left">Downloads</th>
              </tr>
            </thead>
            <tbody>
              {thesisData.map((thesis, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'border-b border-gray-700' : 'border-b bg-neutral-focus'}
                >
                  <td className="py-3 px-4 text-white">{thesis.title}</td>
                  <td className="py-3 px-4 text-white">{thesis.views}</td>
                  <td className="py-3 px-4 text-white">{thesis.downloads}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Statistics;
