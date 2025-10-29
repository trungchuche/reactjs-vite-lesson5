import { Formik } from "formik";
import * as Yup from "yup";
import "./App.css";

export default function ContactForm() {
    // tao schema validate bang Yup
    const validationSchema = Yup.object({
        name: Yup.string()
            .matches(/^[a-zA-Z\s]{2,}$/, "Invalid name format")
            .required("Required"),
        email: Yup.string()
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Invalid email format")
            .required("Required"),
        phone: Yup.string()
            .matches(/^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-4|6-9])[0-9]{7}$/, "Invalid phone number")
            .required("Required"),
        message: Yup.string()
            .required("Required"),
    });

    // ham submit form
    const handleSubmit = (values, { resetForm }) => {
        alert("Contact form submitted successfully!!!");
        console.log("Form values:", values);
        resetForm();
    };

    return (
        <div className="contact-form-container">
            <h1 className="contact-form-title">Contact Form</h1>

            <Formik
                initialValues={{ name: '', email: '', phone: '', message: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, errors, touched, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit} className="contact-form" noValidate>
                        {/* Name field */}
                        <div className="form-field">
                            <label className="form-label">Name</label>
                            <input
                                className="form-input"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                            />
                            {touched.name && errors.name && (
                                <p className="error-message">{errors.name}</p>
                            )}
                        </div>
                        {/* Email field */}
                        <div className="form-field">
                            <label className="form-label">Email</label>
                            <input
                                className="form-input"
                                name="email"
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                            />
                            {touched.email && errors.email && (
                                <p className="error-message">{errors.email}</p>
                            )}
                        </div>
                        {/* Phone field */}
                        <div className="form-field">
                            <label className="form-label">Phone</label>
                            <input
                                className="form-input"
                                name="phone"
                                type="tel"
                                value={values.phone}
                                onChange={handleChange}
                            />
                            {touched.phone && errors.phone && (
                                <p className="error-message">{errors.phone}</p>
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

                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                )}

            </Formik>
        </div>
    )
}