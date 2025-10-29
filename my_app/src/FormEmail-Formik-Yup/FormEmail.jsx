import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import "./App.css";

export default function FormEmail() {
    // State để lưu file đã chọn
    const [selectedFile, setSelectedFile] = useState(null);

    // tao schema validate bang Yup
    const validationSchema = Yup.object({
        to: Yup.string()
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Invalid email format")
            .required("Required"),
        title: Yup.string()
            .required("Required"),
        message: Yup.string()
            .required("Required"),
    });

    // ham xu ly khi chon file
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    // ham submit form
    const handleSubmit = (values, { resetForm }) => {
        const formData = {
            ...values,
            file: selectedFile ? selectedFile.name : "No file selected"
        };
        alert("Email form submitted successfully!!!");
        console.log("Form values:", formData);
        console.log("File object:", selectedFile);
        resetForm();
        setSelectedFile(null);
    };

    return (
        <div className="contact-form-container">
            <h1 className="contact-form-title">Email Form</h1>

            <Formik
                initialValues={{ to: '', title: '', message: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, errors, touched, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit} className="contact-form" noValidate>
                        {/* To field */}
                        <div className="form-field">
                            <label className="form-label">To</label>
                            <input
                                className="form-input"
                                name="to"
                                type="email"
                                value={values.to}
                                onChange={handleChange}
                            />
                            {touched.to && errors.to && (
                                <p className="error-message">{errors.to}</p>
                            )}
                        </div>
                        {/* Title field */}
                        <div className="form-field">
                            <label className="form-label">Title</label>
                            <input
                                className="form-input"
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                            />
                            {touched.title && errors.title && (
                                <p className="error-message">{errors.title}</p>
                            )}
                        </div>
                        {/* Message field */}
                        <div className="form-field">
                            <label className="form-label">Message</label>
                            <textarea
                                className="form-textarea"
                                name="message"
                                value={values.message}
                                onChange={handleChange}
                            />
                            {touched.message && errors.message && (
                                <p className="error-message">{errors.message}</p>
                            )}
                        </div>

                        {/* File upload field */}
                        <div className="form-field">
                            <label className="form-label">Attachment</label>
                            <input
                                type="file"
                                className="form-input"
                                onChange={handleFileChange}
                                accept=".pdf,.doc,.docx,.txt,.jpg,.png"
                            />
                            {selectedFile && (
                                <p className="file-info">Selected: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(2)} KB)</p>
                            )}
                        </div>

                        <button type="submit" className="submit-button">Send Email</button>
                    </form>
                )}
            </Formik>

        </div>
    )
}