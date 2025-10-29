
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Home.css";

export default function HomeLogin() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("");

    // Kiểm tra trạng thái đăng nhập khi component mount
    useEffect(() => {
        const loggedIn = localStorage.getItem("isLoggedIn");
        const storedUsername = localStorage.getItem("username");
        const storeRole = localStorage.getItem("role");
        if (loggedIn === "true") {
            setIsLoggedIn(true);
            setUsername(storedUsername || "");
            setRole(storeRole || "");
        }
    }, []);

    // Xử lý đăng nhập
    const handleLogin = () => {
        navigate("/login");
    };

    // Xử lý đăng xuất
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");
        setIsLoggedIn(false);
        setUsername("");
        alert("Logged out successfully!");
    };

    return (
        <div className="home-container">
            <div className="home-content">
                <h1>Welcome to Our Website</h1>

                {isLoggedIn ? (
                    <div className="user-info">
                        <p className="user-role">
                            Role: <span className={`role-badge ${role.toLowerCase()}`}>{role}</span>
                        </p>
                        <button onClick={handleLogout} className="logout-btn">
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="login-section">
                        <p className="login-message">
                            Please login to access all features
                        </p>
                        <button onClick={handleLogin} className="login-btn">
                            Login
                        </button>
                    </div>
                )}

                <div className="features">
                    <h2>Our Features</h2>
                    <div className="feature-grid">
                        <div className="feature-card">
                            <div className="feature-icon">📚</div>
                            <h3>Books Manager</h3>
                            <p>Manage your book collection easily</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">✉️</div>
                            <h3>Email Forms</h3>
                            <p>Send emails with attachments</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📝</div>
                            <h3>Contact Forms</h3>
                            <p>Get in touch with us</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔐</div>
                            <h3>Secure Access</h3>
                            <p>Your data is safe with us</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}