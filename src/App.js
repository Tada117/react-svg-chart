import { useState } from "react";
import Chart from "./components/Chart";

function App() {
  const [mode, setMode] = useState("line");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "64px",
        background: "#efefef",
      }}
    >
      <div
        onChange={(e) => setMode(e.target.value)}
        style={{ display: "flex", gap: "48px", alignItems: "center" }}
      >
        <label>
          Line
          <input type="radio" value="line" checked={mode === "line"} />
        </label>
        <label>
          Bar
          <input type="radio" value="bars" checked={mode === "bars"} />
        </label>
      </div>

      <Chart
        data={"1,2,6,9,3,11,9,6,2,1,7"}
        mode={mode}
        width={1000}
        height={600}
        color="teal"
      />
    </div>
  );
}

export default App;
