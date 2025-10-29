import React from "react";
import { Routes, Route } from "react-router-dom";
import Category from "./Category";
import Product from "./Product";
import "./App.css";

// cùng là 1 trang nhưng lấy id của option thông qua state
export default function App() {
    return (
        <Routes>
            {/* trang chinh chua dropdown chon loai xe */}
            <Route path="/" element={<Category />} />
            {/* trang hien thi san pham dua tren loai xe duoc chon */}
            <Route path="/product" element={<Product />} />
        </Routes>
    );

}