import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompanyDashboard = () => {
  const [companyData, setCompanyData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await axios.get('/api/company');
        setCompanyData(response.data);
        setIsLoading(false);
        setErrorMessage('');
      } catch (error) {
        setErrorMessage('Failed to fetch company data. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchCompanyData();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Company Dashboard</h1>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : errorMessage ? (
        <div className="error">{errorMessage}</div>
      ) : (
        <div className="company-info">
          <h2>{companyData.name}</h2>
          <p>{companyData.description}</p>
          <p>Location: {companyData.location}</p>
          <p>Employee Count: {companyData.employeeCount}</p>
          {/* Additional company data and components */}
        </div>
      )}
    </div>
  );
};

export default CompanyDashboard;
