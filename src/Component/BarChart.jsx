// Import necessary libraries and components
import React from 'react';
import Chart from 'react-google-charts';

const BarChart = ({ studentData }) => {
  // Group students by year and calculate the total for each year
  const yearlyTotal = studentData.reduce((acc, student) => {
    const enrollmentYear = new Date(student.EnrollmentDate).getFullYear();
    acc[enrollmentYear] = (acc[enrollmentYear] || 0) + 1;
    return acc;
  }, {});

  // Format data for the BarChart
  const chartData = [['Year', 'Total Students']];
  Object.entries(yearlyTotal).forEach(([year, total]) => {
    chartData.push([year, total]);
  });

  return (
    <Chart
      chartType="Bar"
      data={chartData}
      options={{
        title: 'Total Students by Year',
        hAxis: {
          title: 'Year',
        },
        vAxis: {
          title: 'Total Students',
          minValue: 0,
        },
      }}
      width="100%"
      height="400px"
    />
  );
};

export default BarChart;
