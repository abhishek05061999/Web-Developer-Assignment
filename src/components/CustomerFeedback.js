import React from 'react';
import './CustomerFeedback.css';

const CustomerFeedback = () => {
  const feedbacks = [
    { name: 'Jenny Wilson', feedback: 'The food was excellent and so was the service.', rating: 5, avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { name: 'Dianne Russell', feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.', rating: 5, avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { name: 'Devon Lane', feedback: 'Normally wings are wings, but theirs are lean meaty and tender, and the sauces are incredible.', rating: 4, avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
  ];

  return (
    <div className="customer-feedback">
      <h2>Customer's Feedback</h2>
      {feedbacks.map((feedback, index) => (
        <div key={index} className="feedback">
          <div className="feedback-header">
            <img src={feedback.avatar} alt={feedback.name} className="avatar" />
            <div>
              <h3>{feedback.name}</h3>
              <div className="rating">
                {'⭐'.repeat(feedback.rating)}
              </div>
            </div>
          </div>
          <p>{feedback.feedback}</p>
        </div>
      ))}
    </div>
  );
}

export default CustomerFeedback;
