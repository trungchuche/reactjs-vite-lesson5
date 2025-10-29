import { useNavigate } from "react-router-dom";
import React from "react";
import "./App.css";
export default function Category() {
    const navigate = useNavigate();

    // dieu huong sang trang /product va truyen categoryId qua state
    const sendDataToPoduct = (event) => {
        navigate("/product", { state: { categoryId: event.target.value } });
    };

    return (
        <div className="app-container">
            <h2>Select a Category:</h2>
            <select defaultValue="default" onChange={sendDataToPoduct}>
                <option value="default" disabled hidden>
                    Choose here
                </option>
                <option value="1">Honda</option>
                <option value="2">Suzuki</option>
                <option value="3">Yamaha</option>
            </select>
        </div>
    );
}