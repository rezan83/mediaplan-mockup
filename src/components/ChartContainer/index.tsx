import React, { useState } from "react";
import { Chart } from "react-google-charts";
import { ReactGoogleChartEvent } from "react-google-charts/dist/types";
import { data } from "../../utils";
import "./chart-container.scss"

export const options = {
  title: "Social_Facebook",
  fontSize: 20,
  fontName: "Arial",
  backgroundColor: "rgb(226, 235, 253)",
  titleTextStyle: {
    color: "gray",
    fontSize: 20,
    fontName: "Arial",
    bold: true,
  },
  curveType: "function",
  legend: "none",
  selectionMode: "single",

  hAxis: {
    baselineColor: "rgb(226, 235, 253)",
    title: "Fraction of actual spend",
    color: "white",
    format: "#.##",
    textStyle: {
      color: "gray",
      fontSize: 20,
      fontName: "Arial",
      bold: true,
    },
    titleTextStyle: {
      color: "gray",
      fontSize: 16,
      fontName: "Arial",
      bold: true,
      italic: true,
    },

    gridlines: { count: 0 },
    // ticks: [0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]
  },
  vAxis: {
    baselineColor: "gray",
    textStyle: {
      color: "gray",
      fontSize: 16,
      fontName: "Arial",
      bold: true,
    },
    gridlines: { count: 4 },
    ticks: [0, 200, 400, 600, 800],
  },
  // width: "100%",
  // height: 300
};

export function ChartContainer() {
  const [value, setValue] = useState([]);
  
  React.useEffect(() => {
    console.log(value);
  }, [value]);
  
  let valX = (parseFloat(value[0]) / 1000).toFixed(2);
  let valY = parseFloat(value[1]).toFixed(2);

  const chartEvents: ReactGoogleChartEvent[] | undefined = [
    {
      eventName: "select",
      callback({ chartWrapper }: any) {
        const dataTable = chartWrapper.getDataTable();
        let selectedItem = chartWrapper.getChart().getSelection()[0];
        let newValue = [
          selectedItem.row,
          dataTable.getValue(selectedItem.row, 1),
        ];
        setValue(newValue as any);
        chartWrapper.getChart().setSelection([selectedItem]);
      },
    },
  ];
  return (
    <>
      <div className="chart-container">
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
          chartEvents={chartEvents}
        />
        <div className="grid-2-col">
          <button>X: {valX}</button>

          <button>Y: {valY}</button>
        </div>
      </div>
    </>
  );
}

export default ChartContainer;
