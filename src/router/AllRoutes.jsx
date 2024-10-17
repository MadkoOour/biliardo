import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx"
import Tickets from "../pages/Tickets.jsx";
function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="*" element={<Home />} />
      </Routes>

    </>
  )
}

export default AllRoutes
