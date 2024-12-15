import React, { useState, useEffect } from 'react';
import './News.css';

const LiveMarketNews = () => {
  const [news, setNews] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); // Initially show 6 news

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/everything?q=real%20estate&apiKey=3da333d972384c2c858d20acce88ad6d');
        const data = await response.json();
        setNews(data.articles.slice(0, 20)); // Limit to 20 articles for simplicity
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const showMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 3, news.length)); // Add 3 more articles
  };

  const showLess = () => {
    setVisibleCount((prevCount) => Math.max(6, prevCount - 3)); // Hide 3 articles, keep at least 6
  };

  return (
<div className="market-news">
  {news.length === 0 ? (
    <p>Loading news...</p>
  ) : (
    <div className="news-container">
      {news.slice(0, visibleCount).map((article, index) => (
        <div key={index} className="news-card">
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <small>{new Date(article.publishedAt).toLocaleDateString()}</small>
        </div>
      ))}
    </div>
  )}

  <div className="buttons">
    {visibleCount < news.length && (
      <button onClick={showMore} className="show-more">
        Show More
      </button>
    )}
    {visibleCount > 6 && (
      <button onClick={showLess} className="show-less">
        Show Less
      </button>
    )}
  </div>
</div>

  );
};

export default LiveMarketNews;
