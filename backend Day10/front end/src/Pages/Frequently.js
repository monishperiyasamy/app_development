import React, { useState } from 'react';
import '../Assets/Frequently.css';

const faqData = [
  {
    question: 'What is this staff scheduling application?',
    answer: 'This is a web application designed to help businesses and organizations efficiently schedule their staff members.',
  },
  {
    question: 'How do I request time off?',
    answer: 'You can request time off by logging into the staff scheduling system and submitting a time-off request. Make sure to provide the dates and reasons for your request.',
  },
  {
    question: 'What if I need to swap shifts with a coworker?',
    answer: 'To swap shifts with a coworker, you should first discuss the swap with them and get their agreement. Then, inform your supervisor and follow the shift swapping procedure in the scheduling system.',
  },
  // Add more FAQ items as needed
];

const Frequently = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="sfaq-container">
      <h1>Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <div className={`sfaq-item`} key={index}>
          <div className={`sfaq-question ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleFAQ(index)}>
            {item.question}
          </div>
          <div className={`sfaq-answer ${activeIndex === index ? 'active' : ''}`}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Frequently;
