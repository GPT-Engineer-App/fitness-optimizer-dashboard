import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Settings from "./pages/Settings.jsx";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
