// src/components/DonationChart.jsx
import ReactApexChart from 'react-apexcharts';

export default function DonationChart() {
  const chartOptions = {
    chart: {
      type: 'area',
      toolbar: { show: false },
      foreColor: '#444',
    },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 2 },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        opacityFrom: 0.7,
        opacityTo: 0.1,
      },
    },
    colors: ['#FFA500'],
    xaxis: {
      categories: [
        'Week 1', 'Week 2', 'Week 3', 'Week 4',
        'Week 5'
      ],
      title: {
        text: 'Campaign Timeline',
        style: {
          fontSize: '14px',
          fontWeight: 500
        }
      }
    },
    tooltip: {
      theme: 'light',
      y: {
        formatter: (val) => `₹${val.toLocaleString()}`
      }
    },
    yaxis: {
      title: {
        text: 'Total Donations (₹)',
        style: {
          fontSize: '14px',
          fontWeight: 500
        }
      },
    }
  };

  const series = [
    {
      name: 'Donations (₹)',
      data: [
        900,   // Week 1 — slow start
        1150,  // Week 2 — small gain
        1075,  // Week 3 — slight dip
        1220,  // Week 4 — moderate gain
        1195,  // Week 5 — tiny dip
      ]

    }
  ];

  return (
    <div className="dashboard-card" style={{ marginTop: '40px' }}>
      <h3 style={{ marginBottom: '20px', fontWeight: '600' }}>Donation Trend (Last 8 Weeks)</h3>
      <ReactApexChart options={chartOptions} series={series} type="area" height={300} />
    </div>
  );
}
