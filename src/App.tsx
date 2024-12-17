import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Timer from "./pages/Timer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </Router>
  );
}

export default App;
