import React from 'react';
import { Link } from 'react-router-dom';
import './CompanyCard.css';

const CompanyCard = ({ company }) => {
  return (
    <div className="company-card">
      <h3>{company.name}</h3>
      <p>Rate: {company.rate}</p>
      <p>Revenue: {company.revenue}</p>
      <Link to={`/company/${company.ticker}`} className="company-details-link">
        View Details
      </Link>
    </div>
  );
};

export default CompanyCard;
