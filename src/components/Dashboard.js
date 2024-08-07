import React, { useState } from 'react';
import './Dashboard.css';
import RecentOrders from './RecentOrders';
import CustomerFeedback from './CustomerFeedback';
import Activity from './Activity';
import NetProfit from './NetProfit';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // Implement search logic here
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="widgets">
        <div className="widget">Total Orders</div>
        <div className="widget">Total Delivered</div>
        <div className="widget">Total Cancelled</div>
        <div className="widget">Total Revenue</div>
      </div>
      <div className="charts">
        <Activity />
        <NetProfit />
      </div>
      <RecentOrders />
      <CustomerFeedback />
    </div>
  );
};

export default Dashboard;
