import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './StockPriceGraph.css'

const StockPriceGraph = ({ stockPrices }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={stockPrices}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={['dataMin - 10', 'dataMax + 10']} />
        <Tooltip />
        <Line type="monotone" dataKey="price" stroke="#007bff" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StockPriceGraph;
