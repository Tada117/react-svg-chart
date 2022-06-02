import React from "react";

const BarChart = ({ data, width, height, maxCoordinates, color }) => {
  const barWidth = width / data.length;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {data.map((item, index) => (
        <rect
          x={index * barWidth}
          y={height - (item.y / maxCoordinates.y) * height}
          width={barWidth}
          height={(item.y / maxCoordinates.y) * height}
          fill={color}
        />
      ))}
    </svg>
  );
};

export default BarChart;
