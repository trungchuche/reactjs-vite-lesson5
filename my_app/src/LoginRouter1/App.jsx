import { Routes, Route } from "react-router-dom";
import HomeLogin from "./HomeLogin";
import Login from "../component/Pages/Login";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomeLogin />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}