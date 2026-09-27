import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import App from "./App";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/header" element={<Header />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
