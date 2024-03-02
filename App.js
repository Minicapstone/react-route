import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import SidebarUser from "./components/SidebarUser";
import { UserDashboard } from "./pages/user/UserDashboard";
import SearchBooks from "./pages/user/SearchBooks";
import FAQ from "./pages/user/FAQ";
import Setting from "./pages/user/Setting";

function App() {
  return (
    <div className="h-screen flex flex-row">
      <Router>
        <SidebarUser></SidebarUser>

        <Routes>
          <Route path="/" element={<UserDashboard />} />
          <Route path="/search-books" element={<SearchBooks />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
