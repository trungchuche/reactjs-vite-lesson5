import React from "react";
import { useParams } from "react-router-dom";
import "./App.css"

export default function Product() {
    // lay tham so categoryId tu url
    const { categoryId } = useParams();

    return (
        <div className="app-container">
            <h2>Id selected:</h2>
            <p>Selected Category ID: {categoryId}</p>
        </div>
    );
}
