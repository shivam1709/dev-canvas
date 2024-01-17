import React, { useState, useEffect } from 'react';
import './Landing.css'; // Import your external CSS file

function Landing() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true); // State to control cursor visibility
  const descriptionText = "DevCanvas is more than just a platform, it's a vibrant community for tech enthusiasts, developers, and creatives who like to dive into a world where innovation meets collaboration, and your ideas come to life.";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText(descriptionText.substring(0, index));
      setShowCursor(true); // Show cursor while typing

      index += 1;

      if (index > descriptionText.length) {
        clearInterval(typingInterval);
        setShowCursor(false); // Hide cursor after typing is complete
      }
    }, 50); // Adjust the interval duration as needed

    // Clear the interval when the component is unmounted
    return () => clearInterval(typingInterval);
  }, [descriptionText]);

  return (
    <div className='container'>
      <div className="sub-heading">
        Welcome to
      </div>
      <div className="heading">
        DevCanvas
      </div>
      <div className="sub-heading">
        Your Creative Hub for Tech Enthusiasts
      </div>
      <div className="description">
        <p>
          {typedText}
          {showCursor && <span className="cursor">|</span>}
        </p>
      </div>
      <div className="buttons">
        <div className="buttons-child">
          <button className="login-button">Login</button>
          <button className="signup-button">Signup</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
