import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import DashboardContent from "./pages/DashboardContent";

function App() {
  return (
    <main className="h-screen w-full">
      <Router>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<DashboardContent />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
