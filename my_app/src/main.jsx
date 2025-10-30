import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import ContactMedical from './FormMedical-Formik-Yup/ContactMedical.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ContactMedical />
    </BrowserRouter>
  </StrictMode>,
)
