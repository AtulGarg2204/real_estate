import React from 'react';
import CompanyCard from '../components/CompanyCard'; // Assuming your CompanyCard component exists
import './HomePage.css'
import LiveMarketNews from '../components/News';

const HomePage = () => {
  const gainers = [
    { name: 'Company A', rate: 5200 },
    { name: 'Company B', rate: 4800 },
    { name: 'Company C', rate: 4500 },
    { name: 'Company D', rate: 4200 },
    { name: 'Company E', rate: 4000 },
  ];

  const losers = [
    { name: 'Company X', rate: 3800 },
    { name: 'Company Y', rate: 3500 },
    { name: 'Company Z', rate: 3200 },
    { name: 'Company W', rate: 3000 },
    { name: 'Company V', rate: 2800 },
  ];

  const companyData = [
    { id: 1, name: 'DLF', properties: ['Property 1', 'Property 2'], rate: '₹5000', revenue: '₹1,00,00,000' ,ticker:"DLF"},
    { id: 2, name: 'TCS', properties: ['Property 3', 'Property 4'], rate: '₹7000', revenue: '₹2,00,00,000',ticker:"TCS" },
    { id: 3, name: 'Reliance', properties: ['Property 5', 'Property 6'], rate: '₹6000', revenue: '₹1,50,00,000',ticker:"RELIANCE"},
    { id: 4, name: 'HDFC BANK', properties: ['Property 7', 'Property 8'], rate: '₹8000', revenue: '₹2,50,00,000',ticker:"HDFCBANK" },
    
  ];
  

  return (
    <div className="home-page">
      <h2>Company Cards</h2>
      <div className="company-cards">
        {companyData.map((company, index) => (
          <CompanyCard key={index} company={company} />
        ))}
      </div>
      
      <section className="property-rates">
        <h2>Properties & Rates</h2>
        <div className="rates-news-container">
          {/* Left Section: Gainers, Losers */}
          <div className="left-section">
            <div className="top-gainers">
              <h3>Top 5 Gainers</h3>
              <ul>
                {gainers.map((gainer, index) => (
                  <li key={index}>{gainer.name} - ₹{gainer.rate}</li>
                ))}
              </ul>
            </div>
            <div className="top-losers">
              <h3>Top 5 Losers</h3>
              <ul>
                {losers.map((loser, index) => (
                  <li key={index}>{loser.name} - ₹{loser.rate}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section: Live Market News */}
          <div className="right-section">
            <div className="live-market-news">
              <h3>Live Market News</h3>
              <LiveMarketNews />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2024 VENQ. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
