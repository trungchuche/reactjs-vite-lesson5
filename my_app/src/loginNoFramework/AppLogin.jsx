import { useState } from "react";
import "./css/App.css";

export default function AppLogin() {
    const [form, setForm] = useState({});

    // hàm sử lý khi người dùng nhập vào ô input
    // cập nhập lại state form theo trường (e.target.value)
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    // kiểm tra các trường có được nhập không
    // hiển thị thông báo thành công hoặc yêu cầu nhập đầy đủ thông tin
    const handleSubmit = () => {
        const isValid =
            form.username && form.email && form.password && form.confirmPassword;

        alert(
            isValid
                ? "Đăng ký thành công"
                : "Vui lòng điền đầy đủ thông tin"
        );
    };

    return (
        <div style={{ maxWidth: 400, margin: "0 auto", padding: 20 }}>
            <h1>Sign up</h1>
            <form>
                <div className="custom-input">
                    <label>UserName</label>
                    <input
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="custom-input">
                    <label>Email</label>
                    <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="custom-input">
                    <label>Passwork</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="custom-input">
                    <label>Confirm Passwork</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </form>

        </div>
    );
}