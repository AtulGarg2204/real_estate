import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StockPriceGraph from './StockPriceGraph';
import './CompanyDetails.css';

const CompanyDetails = () => {
  const { id } = useParams(); // The id here refers to the company ticker (e.g., 'RELIANCE.BSE')
  const navigate = useNavigate();
  const [company, setCompany] = useState(null);
  const [properties, setProperties] = useState([]);
  const [stockPrices, setStockPrices] = useState([]);
  const [filteredStockPrices, setFilteredStockPrices] = useState([]);
  const [selectedTimeframe, setSelectedTimeframe] = useState('day'); // Default to day view
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        // Fetch company details (e.g., name, description, properties)
        const companyData = {
          name: id , // Example, add real API call for company details
          description: `Details about ${id}`,
        };

        // Example for properties (could be from an API as well)
        const propertiesData = [
          { name: 'Property 1', price: 5000 },
          { name: 'Property 2', price: 7000 },
        ];

        setCompany(companyData);
        setProperties(propertiesData);

        // Fetch stock prices using the API
        const stockPricesData = await fetchStockPrices(id);
        setStockPrices(stockPricesData);
        setFilteredStockPrices(stockPricesData); // Set initial filtered data
      } catch (error) {
        console.error("Error fetching company data", error);
        setError("Failed to load company details. Please try again later.");
      }
    };

    fetchCompanyData();
  }, [id]);

  // Function to fetch stock prices for the specific company using the API
  const fetchStockPrices = async (ticker) => {
    if (!ticker) {
      throw new Error('No ticker provided');
    }
  
    const apiKey = 'YOUR APIKEY' // Your API key
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}.bse&outputsize=full&apikey=${apiKey}`);
    const data = await response.json();
  
    // Check if the 'Time Series (Daily)' key exists in the API response
    const timeSeries = data['Time Series (Daily)'];
  
    if (!timeSeries) {
      throw new Error(`No stock data available for ${ticker}`);
    }
  
    const prices = Object.keys(timeSeries).map(date => ({
      date: date,
      price: parseFloat(timeSeries[date]['4. close']),
    }));
  
    return prices.reverse(); // Reverse the order to get chronological data
  };
  
  

  const handleTimeframeChange = (timeframe) => {
    setSelectedTimeframe(timeframe);

    const today = new Date();
    let filteredData;

    switch (timeframe) {
      case 'day':
        filteredData = stockPrices.slice(-1); // Show only the latest data
        break;
      case '7days':
        filteredData = stockPrices.slice(-7); // Show last 7 days
        break;
      case 'month':
        filteredData = stockPrices.slice(-30); // Show last 30 days
        break;
      case 'year':
        filteredData = stockPrices.slice(-365); // Show last 365 days
        break;
      default:
        filteredData = stockPrices;
    }

    setFilteredStockPrices(filteredData);
  };

  const handleInvest = (property) => {
    alert(`Investing ₹${property.price} in ${property.name}`);
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (!company) {
    return <p>Loading...</p>;
  }

  return (
    <div className="company-details">
      <h1>{company.name}</h1>
      <p>{company.description}</p>

      <h2>Stock Price Graph</h2>
      <div className="stock-graph">
        <div className="timeframe-buttons">
          <button onClick={() => handleTimeframeChange('day')}>1 Day</button>
          <button onClick={() => handleTimeframeChange('7days')}>7 Days</button>
          <button onClick={() => handleTimeframeChange('month')}>1 Month</button>
          <button onClick={() => handleTimeframeChange('year')}>1 Year</button>
        </div>
        <StockPriceGraph stockPrices={filteredStockPrices} />
      </div>

      <h2>Properties for Investment</h2>
      <div className="properties-list">
        {properties.map((property, index) => (
          <div key={index} className="property-card">
            <h3>{property.name}</h3>
            <p>Price: ₹{property.price}</p>
            <button onClick={() => handleInvest(property)}>Invest</button>
          </div>
        ))}
      </div>

      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default CompanyDetails;
