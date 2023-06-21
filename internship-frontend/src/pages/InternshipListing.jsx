import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InternshipListing = () => {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    // Fetch internships from the server
    axios.get('/api/internships')
      .then(response => {
        setInternships(response.data);
      })
      .catch(error => {
        console.error('Error fetching internships:', error);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Internship Listing</h1>
      <ul className="space-y-4">
        {internships.map(internship => (
          <li key={internship.id} className="border p-4">
            <h3 className="text-lg font-bold">{internship.title}</h3>
            <p className="text-gray-500">{internship.description}</p>
            <p className="text-gray-500">Location: {internship.location}</p>
            <p className="text-gray-500">Start Date: {internship.startDate}</p>
            <p className="text-gray-500">End Date: {internship.endDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InternshipListing;
