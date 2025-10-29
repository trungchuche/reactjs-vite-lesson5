import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import "./App.css";
export default function AppBooks() {
    const [books, setBooks] = useState([]);
    const [form, setForm] = useState({});
    const [indexSelected, setIndexSelected] = useState(-1);

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Title is required"),
        quantity: Yup.number()
            .required("Quantity is required")
            .min(0, "Quantity cannot be negative")
            .integer("Quantity must be an integer"),
    });

    const handleSubmit = (values, { resetForm }) => {
        if (indexSelected === -1) {
            setBooks([...books, values]);
        } else {
            const updatedBooks = books.map((book, index) =>
                index === indexSelected ? values : book
            );
            setBooks(updatedBooks);
            setIndexSelected(-1);
        }
        resetForm();
    };

    const handleEdit = (index) => {
        setForm(books[index]);
        setIndexSelected(index);
    };
    const handleDelete = (index) => {
        const updatedBooks = books.filter((_, i) => i !== index);
        setBooks(updatedBooks);
        if (index === indexSelected) {
            setIndexSelected(-1);
            setForm({});
        }
    };

    return (
        <div className="App">
            <h1>Books Manager</h1>
            <Formik
                enableReinitialize
                initialValues={{
                    title: form.title || "",
                    quantity: form.quantity || "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Title:</label>
                            <input
                                type="text"
                                name="title"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.title}
                            />
                            {touched.title && errors.title && (
                                <div className="error">{errors.title}</div>
                            )}
                        </div>
                        <div>
                            <label>Quantity:</label>
                            <input
                                type="number"
                                name="quantity"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.quantity}
                            />
                            {touched.quantity && errors.quantity && (
                                <div className="error">{errors.quantity}</div>
                            )}
                        </div>
                        <button type="submit">
                            {indexSelected === -1 ? "Add Book" : "Update Book"}
                        </button>
                    </form>
                )}
            </Formik>
            <h2>Books List</h2>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>
                        <span>
                            <strong>{book.title}</strong> - Quantity: {book.quantity}
                        </span>
                        <div>
                            <button onClick={() => handleEdit(index)}>Edit</button>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )




}