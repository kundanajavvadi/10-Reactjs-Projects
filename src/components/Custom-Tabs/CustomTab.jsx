import React, { useState } from 'react';
import './CustomTab.css'; // Import the CSS file

function CustomTab({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <center>
    <div>
        <h1>Custom Tabs</h1>
    <div className="custom-tab-container">
        
      <div className="tab-buttons">
        {tabs.map((tabItem, index) => (
          <button
            key={index}
            className={`tab-button ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleChange(index)}
          >
            {tabItem.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeIndex].content}
      </div>
    </div>
    </div>
    </center>
  );
}

export default CustomTab;
