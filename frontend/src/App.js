import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import AddUser from './components/Admin/AddUser';
import ManagePackages from './components/Admin/ManagePackages';
import ViewBills from './components/Customer/ViewBills';
import PayUPI from './components/Customer/PayUPI';
import GenerateReport from './components/Admin/GenerateReport';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/admin/add-user" element={<AddUser />} />
        <Route path="/admin/manage-packages" element={<ManagePackages />} />
        <Route path="/customer/view-bills" element={<ViewBills />} />
        <Route path="/customer/pay" element={<PayUPI />} />
        <Route path="/admin/generate-report" element={<GenerateReport />} />
      </Routes>
    </Router>
  );
}

export default App;
