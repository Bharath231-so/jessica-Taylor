import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import PatientDetails from './components/PatientDetails';
import DiagnosisHistory from './components/DiagnosisHistory';
import './App.css';

function App() {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="content">
        <Sidebar />
        <main className="main-content">
          <DiagnosisHistory />
          <PatientDetails />
        </main>
      </div>
    </div>
  );
}

export default App;
