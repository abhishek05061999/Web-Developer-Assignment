import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import RecentOrders from './components/RecentOrders';
import CustomerFeedback from './components/CustomerFeedback';
import Activity from './components/Activity';
import NetProfit from './components/NetProfit';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<RecentOrders />} />
            <Route path="/delivered" element={<div>Delivered View</div>} />
            <Route path="/cancelled" element={<div>Cancelled View</div>} />
            <Route path="/revenue" element={<div>Revenue View</div>} />
            <Route path="/feedback" element={<CustomerFeedback />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/profit" element={<NetProfit />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
