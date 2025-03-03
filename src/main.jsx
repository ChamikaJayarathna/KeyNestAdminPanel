import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'admin-lte/dist/css/adminlte.min.css';
// import 'admin-lte/dist/css/adminlte.css';
import 'admin-lte/dist/js/adminlte.min.js';
// import 'admin-lte/dist/js/adminlte.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'overlayscrollbars/styles/overlayscrollbars.css';
import 'apexcharts/dist/apexcharts.css'
import 'apexcharts/dist/apexcharts.js'
// import 'apexcharts/dist/apexcharts.min.js'
import '@popperjs/core/dist/umd/popper.min.js'
import 'react-quill-new/dist/quill.snow.css';
import 'jquery';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
