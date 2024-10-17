import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx"
function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>

    </>
  )
}

export default AllRoutes
