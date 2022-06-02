import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

const chartMode = {
  line: "line",
  bar: "bar",
};

const Chart = ({ mode, data, width, height, color }) => {
  const [chartData, setChartData] = useState([]);
  const [maxCoordinates, setMaxCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let tmp = data;
    if (typeof tmp === "string") {
      tmp = tmp.split(",").map((item) => {
        return parseInt(item, 10);
      });
    }

    let coordinatesArr = tmp.map((item, index) => {
      return {
        x: index,
        y: item,
      };
    });

    setChartData(coordinatesArr);

    setMaxCoordinates({
      x: coordinatesArr.length - 1,
      y: Math.max(...coordinatesArr.map((item) => item.y)),
    });
  }, [data]);

  return (
    <div style={{ border: "1px solid black", width: width, height: height }}>
      {mode === chartMode.line ? (
        <LineChart
          data={chartData}
          width={width}
          height={height}
          color={color}
          maxCoordinates={maxCoordinates}
        />
      ) : (
        <BarChart
          data={chartData}
          width={width}
          height={height}
          color={color}
          maxCoordinates={maxCoordinates}
        />
      )}
    </div>
  );
};

Chart.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  mode: PropTypes.oneOf(Object.keys(chartMode)),
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
Chart.defaultProps = {
  data: [],
  mode: chartMode.line,
  width: 600,
  height: 300,
  color: "#000",
};
export default Chart;
