import React, { useState } from "react";
import "./App.css";
// các thông báo lỗi dùng để hiển thị khi validate không hợp lệ
const MESSAGE_ERROR = {
    username: "Username error",
    email: "Email error",
    password: "Password error",
    confirmPassword: "Confirm Password error",
};

// các biểu thức chính quy để kiểm tra định dạng từng trường
const REGEX = {
    username: /^[a-zA-Z]{2,}$/, // chỉ chấp nhận chữ cái, tối thiểu 2 ký tự
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // định dạng email chuẩn
    password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/ // mật khẩu có thể chứa ký tự đặc biệt, tối thiểu 6 ký tự
};

export default function AppLoginValidateNoFramework() {
    // khởi tạo state 'form' lưu giá trị và lỗi của từng trường input
    // cấu trúc form là object
    const [form, setForm] = useState({});

    // hàm sử lý khi người dùng nhập vào ô input
    function handleChange(e) {
        let error = "";
        const { name, value } = e.target;

        // logic validate từng trường
        if (name === "password") {
            // nếu đang nhập passwork và confirmPassword đã nhập
            if (form.confirmPassword && form.confirmPassword.value) {
                // so sánh password với confirmPassword
                error = value === form.confirmPassword.value ? "" : MESSAGE_ERROR[name];
            } else {
                // nếu chưa có confirmPassword thì chỉ validate password
                error = REGEX[name].test(value) ? "" : MESSAGE_ERROR[name];
            }
        } else if (name === "confirmPassword") {
            // với confirmPasswork, kiểm tra khớp với password
            error = value === (form.password ? form.password.value : "") ? "" : MESSAGE_ERROR[name];
        } else {
            // với các trường còn lại, kiểm tra định dạng theo regex
            error = REGEX[name].test(value) ? "" : MESSAGE_ERROR[name];
        }

        // cập nhập lại state form với giá trị và lỗi mới
        setForm({
            ...form,
            [name]: { value, error },
        });
    }

    // hàm xử lý khi người dùng nhấn nút submit
    function handleSubmit() {
        // kiểm tra tất cả các trường đã có giá trị (không trống) 
        const isFiller =
            form.username && form.username.value &&
            form.email && form.email.value &&
            form.password && form.password.value &&
            form.confirmPassword && form.confirmPassword.value;

        // kiểm tra tất cả các trường không có lỗi
        const isError =
            isFilled &&
            (form.username.error || form.email.error || form.password.error || form.confirmPassword.error);

        // Nếu đủ dữ liệu và không có lỗi thì alert thành công, ngược lại yêu cầu nhập đủ đúng thông tin
        alert(isFilled && !isError
            ? "Sign up successfully!!!"
            : "Please fill out all the fields!!!");
    }

    return (
        <div style={{ maxWidth: 400, margin: "0 auto", padding: 20 }}>
            <h1>Sign up</h1>
            <form>
                {/* username input voi highlight loi neu co */}
                <div className={`custom-input ${form.username && form.username.error ? "error" : ""}`}>
                    <label>UserName</label>
                    <input
                        name="username"
                        value={(form.username && form.username.value) || ""}
                        onChange={handleChange} // goi validate khi nguoi dung nhap
                    />
                    {/* hien thi thong bao loi neu co */}
                    {form.username && form.username.error && (
                        <p className="error">{form.username.error}</p>
                    )}
                </div>

                {/* Email input */}
                <div className={`custom-input ${form.email && form.email.error ? "custom-input-error" : ""}`}>
                    <label>Email</label>
                    <input
                        name="email"
                        value={(form.email && form.email.value) || ""}
                        onChange={handleChange} // goi validate khi nguoi dung nhap
                    />
                    {/* hien thi thong bao loi neu co */}
                    {form.email && form.email.error && (
                        <p className="error">{form.email.error}</p>
                    )}
                </div>
                {/* Password input */}
                <div className={`custom-input ${form.password && form.password.error ? "custom-input-error" : ""}`}>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={(form.password && form.password.value) || ""}
                        onChange={handleChange} // goi validate khi nguoi dung nhap
                    />
                    {/* hien thi thong bao loi neu co */}
                    {form.password && form.password.error && (
                        <p className="error">{form.password.error}</p>
                    )}
                </div>
                {/* Confirm Password input */}
                <div className={`custom-input ${form.confirmPassword && form.confirmPassword.error ? "custom-input-error" : ""}`}>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={(form.confirmPassword && form.confirmPassword.value) || ""}
                        onChange={handleChange} // goi validate khi nguoi dung nhap
                    />
                    {/* hien thi thong bao loi neu co */}
                    {form.confirmPassword && form.confirmPassword.error && (
                        <p className="error">{form.confirmPassword.error}</p>
                    )}
                </div>

                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </form>

        </div>

    )
}
