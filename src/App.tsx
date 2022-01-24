import MainForm from "./components/MainForm";
import ChartContainer from "./components/ChartContainer";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="form" element={<MainForm />} />
        <Route path="chart" element={<ChartContainer />} />
      </Routes>
    </div>
  );
}
