import React, { useState } from "react";
import { Formik } from "formik";
import "./css/App.css";

export default function LoginForFramework() {
    // Regex kiểm tra định dạng email
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    };

    // Hàm validate kiểm tra lỗi cho từng trường
    function handleValidate(values) {
        const errors = {};

        // Kiểm tra email có tồn tại không
        if (!values.email) {
            errors.email = "Required";
        } else if (!REGEX.email.test(values.email)) {
            errors.email = "Invalid email address";
        }

        // Kiểm tra password có tồn tại không
        if (!values.password) {
            errors.password = "Required";
        }

        return errors;
    }

    // Hàm xử lý khi Submit thành công
    function handleSubmit(values) {
        alert("Login successfully!!!");
        console.log('Form values:', values);
    }

    return (
        <div style={{ maxWidth: 400, margin: "0 auto", padding: 20 }}>
            <h1>Login</h1>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {/* destructuring các props từ Formik */}
                {({ values, errors, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        {/* Email field */}
                        <div className={`custom-input ${errors.email ? "custom-input-error" : ""}`}>
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>

                        {/* Password field */}
                        <div className={`custom-input ${errors.password ? "custom-input-error" : ""}`}>
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                            />
                            {errors.password && <p className="error">{errors.password}</p>}
                        </div>

                        {/* Submit button */}
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    );
}
