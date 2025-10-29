import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Account mẫu để kiểm tra
    const ADMIN_ACCOUNT = {
        admin: {
            username: "admin@gmail.com",
            password: "admin123",
            role: "admin"
        },
        employee: {
            username: "employee@gmail.com",
            password: "employee123",
            role: "employee"
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // kiểm tra thông tin đăng nhập
        let loggedInUser = null;

        // kiểm tra admin\
        if (
            username === ADMIN_ACCOUNT.admin.username &&
            password === ADMIN_ACCOUNT.admin.password
        ) {
            loggedInUser = ADMIN_ACCOUNT.admin;
        }
        // kiểm tra employee
        else if (
            username === ADMIN_ACCOUNT.employee.username &&
            password === ADMIN_ACCOUNT.employee.password
        ) {
            loggedInUser = ADMIN_ACCOUNT.employee;
        }

        if (loggedInUser) {
            alert(`Login successful! Welcome ${loggedInUser.role}!`);
            // Lưu thông tin đăng nhập vào localStorage
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("username", username);
            localStorage.setItem("role", loggedInUser.role);
            // Chuyển hướng về trang home
            navigate("/");
        } else {
            setError("Invalid username or password!");
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: "50px auto", padding: 20 }}>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 15 }}>
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={{ display: "block", width: "100%", padding: 8, marginTop: 5 }}
                            required
                        />
                    </label>
                </div>
                <div style={{ marginBottom: 15 }}>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ display: "block", width: "100%", padding: 8, marginTop: 5 }}
                            required
                        />
                    </label>
                </div>
                {error && (
                    <p style={{ color: "red", marginBottom: 15 }}>{error}</p>
                )}
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: 10,
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: 5,
                        cursor: "pointer"
                    }}
                >
                    Login
                </button>
            </form>
            <p style={{ marginTop: 20, fontSize: "0.9rem", color: "#666" }}>
                Hint: username: admin@gmail.com, password: admin123
                <br />
                or user: username: employee@gmail, password: employee123
            </p>
        </div>
    );

}