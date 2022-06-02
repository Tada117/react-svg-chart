import React from "react";

const LineChart = ({
  data = [],
  height = 300,
  width = 600,
  maxCoordinates,
  color,
}) => {
  function getXPosition(x) {
    return (x / maxCoordinates.x) * width;
  }

  function getYPosition(y) {
    return height - (y / maxCoordinates.y) * height;
  }

  function makePath() {
    let pathD = ` M  ${getXPosition(data[0]?.x)} ${getYPosition(data[0]?.y)} `;
    pathD += data.map((point, i) => {
      return `L ${getXPosition(point.x)} ${getYPosition(point.y)}  `;
    });
    return <path stroke={color} d={pathD} fill="none" />;
  }

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {makePath()}
    </svg>
  );
};

export default LineChart;
