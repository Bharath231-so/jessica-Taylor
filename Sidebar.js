import React from 'react';

const Sidebar = () => {
  const patients = [
    { name: 'Emily Williams', gender: 'Female', age: 28 },
    { name: 'Ryan Johnson', gender: 'Male', age: 45 },
    { name: 'Jessica Taylor', gender: 'Female', age: 28 },
    // Add more patients
  ];

  return (
    <aside className="sidebar">
      <h2>Patients</h2>
      <ul>
        {patients.map((patient, index) => (
          <li key={index} className={patient.name === 'Jessica Taylor' ? 'active' : ''}>
            {patient.name} <span>{patient.gender}, {patient.age}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
