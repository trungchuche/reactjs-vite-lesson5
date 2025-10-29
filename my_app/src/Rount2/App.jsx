import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Category from "./Category";
import Product from "./Product";

// lấy id của option thông qua params trong url
export default function App() {
    return (
        <Routes>
            {/* trang chinh chua dropdown chon loai xe */}
            <Route path="/" element={<Category />} />
            {/* trang hien thi san pham dua tren loai xe duoc chon */}
            <Route path="/product/:categoryId" element={<Product />} />
        </Routes>
    );
}