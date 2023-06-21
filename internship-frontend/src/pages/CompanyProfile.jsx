import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompanyProfile = () => {
  const [companyData, setCompanyData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await axios.get('/api/company/profile');
        setCompanyData(response.data);
        setIsLoading(false);
        setErrorMessage('');
      } catch (error) {
        setErrorMessage('Failed to fetch company profile. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchCompanyData();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Company Profile</h1>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : errorMessage ? (
        <div className="error">{errorMessage}</div>
      ) : (
        <div className="company-info">
          <h2>{companyData.name}</h2>
          <p>{companyData.description}</p>
          <p>Location: {companyData.location}</p>
          <p>Website: <a href={companyData.website} target="_blank" rel="noopener noreferrer">{companyData.website}</a></p>
          {/* Additional company profile data and components */}
        </div>
      )}
    </div>
  );
};

export default CompanyProfile;
