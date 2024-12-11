import React from 'react';

const PatientDetails = () => {
  return (
    <section className="patient-details">
      <img src="jessica-taylor.jpg" alt="Jessica Taylor" className="profile-pic" />
      <h3>Jessica Taylor</h3>
      <p><strong>Date of Birth:</strong> August 23, 1996</p>
      <p><strong>Gender:</strong> Female</p>
      <p><strong>Contact Info:</strong> (415) 555-1234</p>
      <p><strong>Emergency Contact:</strong> (415) 555-5678</p>
      <p><strong>Insurance Provider:</strong> Sunrise Health Assurance</p>
      <button>Show All Information</button>
    </section>
  );
};

export default PatientDetails;
