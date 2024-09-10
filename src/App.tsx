import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <main className="h-screen w-full">
      <Router>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
