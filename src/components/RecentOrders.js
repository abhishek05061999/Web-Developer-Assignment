import React from 'react';
import './RecentOrders.css';

const RecentOrders = () => {
  const orders = [
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { customer: 'Jane Cooper', orderNo: '48967586', amount: '$305.02', status: 'Pending', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { customer: 'Guy Hawkins', orderNo: '78985215', amount: '$54.88', status: 'Cancelled', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { customer: 'Kristin Watson', orderNo: '20965732', amount: '$65.00', status: 'Delivered', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
  ];

  return (
    <div className="recent-orders">
      <h2>Recent Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>
                <img src={order.avatar} alt={order.customer} className="avatar" />
                {order.customer}
              </td>
              <td>{order.orderNo}</td>
              <td>{order.amount}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentOrders;
