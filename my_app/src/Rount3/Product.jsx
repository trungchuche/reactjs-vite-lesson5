import { useLocation } from "react-router-dom";
import React from "react";
import "./App.css"

export default function Product() {
    const { state } = useLocation(); // Hook useLocation de lay state truyen tu Category

    return (
        <div className="app-container">
            <h2>Product Page</h2>
            {state && state.categoryId ? (
                <p className="product-info">Id selected: {state.categoryId}</p>
            ) : (
                <p className="product-info">No category selected</p>
            )}
        </div>
    );
}