import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">Logo</div>
      <div className="menu">
        <Link to="/dashboard" className="menu-item">Dashboard</Link>
        <Link to="/orders" className="menu-item">Orders</Link>
        <Link to="/feedback" className="menu-item">Customers</Link>
        <Link to="/reports" className="menu-item">Reports</Link>
        <Link to="/settings" className="menu-item">Settings</Link>
      </div>
    </div>
  );
};

export default Sidebar;
