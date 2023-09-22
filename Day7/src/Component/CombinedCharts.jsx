import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { PieChart, Pie, Cell, Legend as PieLegend } from 'recharts';
import './CombinedCharts.css';
import Sidebar from './SideBar';

const barChartData = [
  { month: 'Jan', currentYear: 7000, lastYear: 6000 },
  { month: 'Feb', currentYear: 9500, lastYear: 7000 },
  { month: 'Mar', currentYear: 12000, lastYear: 8000 },
  { month: 'Apr', currentYear: 12200, lastYear: 8500 },
  { month: 'May', currentYear: 10500, lastYear: 7500 },
  { month: 'Jun', currentYear: 10600, lastYear: 7800 },
  { month: 'Jul', currentYear: 9300, lastYear: 7200 },
  { month: 'Aug', currentYear: 8700, lastYear: 6400 },
  { month: 'Sep', currentYear: 8300, lastYear: 7000 },
  { month: 'Oct', currentYear: 10700, lastYear: 7900 },
  { month: 'Nov', currentYear: 11200, lastYear: 8300 },
  { month: 'Dec', currentYear: 1179900, lastYear: 8700 },
  // ... rest of your bar chart data
];

const pieChartData = [
  { name: 'Desktop', value: 53 },
  { name: 'Tablet', value: 15 },
  { name: 'Phone', value: 32 },
];

const COLORS = ['#0086FE', '#FFBB78', '#00C49F'];

const CombinedCharts = () => {
  return (
    <div>
    <Sidebar/>
    <div className="combined-charts">
      <div className="bar-chart">
        <h2 className="chart-title">Sales Comparison</h2>
        <BarChart width={750} height={350} data={barChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="currentYear" fill="blue" name="Current Year" />
          <Bar dataKey="lastYear" fill="green" name="Last Year" />
        </BarChart>
      </div>
      
    </div>
    </div>
  );
};

export default CombinedCharts;
