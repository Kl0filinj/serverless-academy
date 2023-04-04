import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "./sheared/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="feature" element={<h1>Feature</h1>} />
        <Route path="company" element={<h1>Company</h1>} />
        <Route path="legal-info" element={<h1> Legal Info</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
