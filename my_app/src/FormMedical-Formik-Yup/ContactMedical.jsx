import { Formik } from 'formik';
import * as Yup from 'yup';
import './App.css';

export default function ContactMedical() {
    // tao schema validation voi Yup
    const validationSchema = Yup.object().shape({
        fullName: Yup.string()
            .required('Full Name is required')
            .min(2, 'Full Name must be at least 2 characters'),
        CMND: Yup.string()
            .required('CMND is required')
            .matches(/^[0-9]{9,12}$/, 'CMND must be 9 to 12 digits'),
        yearOfBirth: Yup.number()
            .required('Year of Birth is required')
            .min(1900, 'Year of Birth must be at least 1900')
            .max(new Date().getFullYear(), `Year of Birth cannot be in the future`),
        sex: Yup.string()
            .required('Sex is required')
            .oneOf(['Male', 'Female'], 'Invalid Sex option'),
        nationality: Yup.string()
            .required('Nationality is required'),
        company: Yup.string()
            .required('Company is required'),
        workingDepartment: Yup.string()
            .required('Working Department is required'),
        insuranceCard: Yup.string()
            .required('Insurance Card is required')
            .matches(/^[0-9]{10}$/, 'Insurance Card must be 10 digits'),
        province: Yup.string()
            .required('Province is required'),
        district: Yup.string()
            .required('District is required'),
        ward: Yup.string()
            .required('Ward is required'),
        address: Yup.string()
            .required('Address is required')
            .min(5, 'Address must be at least 5 characters'),
        phoneNumber: Yup.string()
            .required('Phone Number is required')
            .matches(/^[0-9]{10,15}$/, 'Phone Number must be 10 to 15 digits'),
        email: Yup.string()
            .required('Email is required')
            .email('Invalid email format'),
    });

    // ham submit form
    const handleSubmit = (values, { resetForm }) => {
        alert("Contact Medical form submitted successfully!!!");
        console.log("Form values:", values);
        resetForm();
    };

    return (
        <div className="container">
            <h2>Contact Medical Form</h2>
            <Formik
                initialValues={{
                    fullName: '',
                    CMND: '',
                    yearOfBirth: '',
                    sex: '',
                    nationality: '',
                    company: '',
                    workingDepartment: '',
                    insuranceCard: '',
                    province: '',
                    district: '',
                    ward: '',
                    address: '',
                    phoneNumber: '',
                    email: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <form onSubmit={handleSubmit} className="form">
                        {/* Personal Information Section */}
                        <div className="section">
                            <h3>Personal Information</h3>

                            <div className="form-group">
                                <label>Full Name:</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.fullName}
                                    className={touched.fullName && errors.fullName ? 'error' : ''}
                                />
                                {touched.fullName && errors.fullName && (
                                    <div className="error-message">{errors.fullName}</div>
                                )}
                            </div>

                            <div className="form-group">
                                <label>CMND (ID Card):</label>
                                <input
                                    type="text"
                                    name="CMND"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.CMND}
                                    className={touched.CMND && errors.CMND ? 'error' : ''}
                                />
                                {touched.CMND && errors.CMND && (
                                    <div className="error-message">{errors.CMND}</div>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Year of Birth:</label>
                                <input
                                    type="number"
                                    name="yearOfBirth"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.yearOfBirth}
                                    className={touched.yearOfBirth && errors.yearOfBirth ? 'error' : ''}
                                />
                                {touched.yearOfBirth && errors.yearOfBirth && (
                                    <div className="error-message">{errors.yearOfBirth}</div>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Sex:</label>
                                <select
                                    name="sex"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.sex}
                                    className={touched.sex && errors.sex ? 'error' : ''}
                                >
                                    <option value="">Select Sex</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                {touched.sex && errors.sex && (
                                    <div className="error-message">{errors.sex}</div>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Nationality:</label>
                                <input
                                    type="text"
                                    name="nationality"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.nationality}
                                    className={touched.nationality && errors.nationality ? 'error' : ''}
                                />
                                {touched.nationality && errors.nationality && (
                                    <div className="error-message">{errors.nationality}</div>
                                )}
                            </div>
                        </div>

                        {/* Work Information Section */}
                        <div className="section">
                            <h3>Work Information</h3>

                            <div className="form-group">
                                <label>Company:</label>
                                <input
                                    type="text"
                                    name="company"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.company}
                                    className={touched.company && errors.company ? 'error' : ''}
                                />
                                {touched.company && errors.company && (
                                    <div className="error-message">{errors.company}</div>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Working Department:</label>
                                <input
                                    type="text"
                                    name="workingDepartment"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.workingDepartment}
                                    className={touched.workingDepartment && errors.workingDepartment ? 'error' : ''}
                                />
                                {touched.workingDepartment && errors.workingDepartment && (
                                    <div className="error-message">{errors.workingDepartment}</div>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Insurance Card:</label>
                                <input
                                    type="text"
                                    name="insuranceCard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.insuranceCard}
                                    className={touched.insuranceCard && errors.insuranceCard ? 'error' : ''}
                                />
                                {touched.insuranceCard && errors.insuranceCard && (
                                    <div className="error-message">{errors.insuranceCard}</div>
                                )}
                            </div>
                        </div>

                        {/* Address Information Section */}
                        <div className="section">
                            <h3>Address Information</h3>

                            <div className="form-group">
                                <label>Province:</label>
                                <input
                                    type="text"
                                    name="province"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.province}
                                    className={touched.province && errors.province ? 'error' : ''}
                                />
                                {touched.province && errors.province && (
                                    <div className="error-message">{errors.province}</div>
                                )}
                            </div>

                            <div className="form-group">
                                <label>District:</label>
                                <input
                                    type="text"
                                    name="district"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.district}
                                    className={touched.district && errors.district ? 'error' : ''}
                                />
                                {touched.district && errors.district && (
                                    <div className="error-message">{errors.district}</div>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Ward:</label>
                                <input
                                    type="text"
                                    name="ward"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.ward}
                                    className={touched.ward && errors.ward ? 'error' : ''}
                                />
                                {touched.ward && errors.ward && (
                                    <div className="error-message">{errors.ward}</div>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Address:</label>
                                <textarea
                                    name="address"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.address}
                                    className={touched.address && errors.address ? 'error' : ''}
                                    rows="3"
                                />
                                {touched.address && errors.address && (
                                    <div className="error-message">{errors.address}</div>
                                )}
                            </div>
                        </div>

                        {/* Contact Information Section */}
                        <div className="section">
                            <h3>Contact Information</h3>

                            <div className="form-group">
                                <label>Phone Number:</label>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phoneNumber}
                                    className={touched.phoneNumber && errors.phoneNumber ? 'error' : ''}
                                />
                                {touched.phoneNumber && errors.phoneNumber && (
                                    <div className="error-message">{errors.phoneNumber}</div>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    className={touched.email && errors.email ? 'error' : ''}
                                />
                                {touched.email && errors.email && (
                                    <div className="error-message">{errors.email}</div>
                                )}
                            </div>
                        </div>

                        <div className="form-actions">
                            <button type="submit" className="submit-btn">
                                Submit Medical Form
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}
