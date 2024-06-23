import "./App.css";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import SubmitForm from "./pages/SubmitForm";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<SubmitForm />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;
