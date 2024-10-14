import React from 'react';
import './App.css'; // Import your CSS styles

function App() {
  return (
    <div className="main-section">
      <header>
        <div className="overlay">
          <nav>
            <div className="logo-content">
              <h1>Swift<span>Connect</span></h1>
            </div>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <li className="hamburger"><i className='bx bx-menu'></i></li>
            <button className="btn">Login</button>
          </nav>
        </div>
      </header>

      <div className="header-content">
        <div className="wrapper">
          <h1>Your <span>reliable,</span> fast<br />
            and quality courier<br />
            service
          </h1>
          <div className="body-content_paragraph">
            Deliver your package quickly, cheaply and easily only here,<br />
            we prioritize the safety of your package.
          </div>

          <div className="status">
            <input type="text" placeholder="Enter customer code" className="input" />
            <button className="Check-btn">Check your package status</button>
          </div>
        </div>
      </div>

      <div className="branding">
        <div className="wrapper">
          <div className="naming">
            <h1>Swift<span>Connect</span></h1>
          </div>
          <div className="naming-desc">
            <p>
              SwiftConnect is the largest and most experienced Domestic Courier Service 
              Company on the Island. Handling time-sensitive documents and packages for 
              over 34 years, we prioritize speed, security, and reliability for every customer.
            </p>
            <div className="icons">
              <div className="icon">
                <i className="fas fa-truck"></i>
                <h2>670+</h2>
                <h5>Vehicles</h5>
              </div>
              <div className="icon">
                <i className="fa-solid fa-users"></i>
                <h2>890+</h2>
                <h5>Employees</h5>
              </div>
              <div className="icon">
                <i className="fa-solid fa-business-time"></i>
                <h2>320+</h2>
                <h5>Projects Completed</h5>
              </div>
              <div className="icon">
                <i className="fa-solid fa-handshake"></i>
                <h2>650+</h2>
                <h5>Partners</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gallery">
        <h1>Our Services</h1>
        <div className="wrapper">
          <div className="gallery-item">
            <img src="path-to-your-image1.jpg" alt="Description 1" />
            <div className="description">
              <h4>Corporate Main Bag Services</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <button>VIEW MORE</button>
            </div>
          </div>
          <div className="gallery-item">
            <img src="path-to-your-image2.jpg" alt="Description 2" />
            <div className="description">
              <h4>Document Delivery</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <button>VIEW MORE</button>
            </div>
          </div>
          {/* More gallery items */}
        </div>
      </div>

      <footer>
        <p>&copy; 2024 SwiftConnect. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
