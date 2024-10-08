import Home from "./Home";
import FrontPage from "./FrontPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Home */}
        <Route path="/" element={<FrontPage />} />
        <Route path="/home" element={<Home />} />
        {/* Redirect to Home if route is not found */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
