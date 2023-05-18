import React from 'react';
import '../styles/portfolio.css';
import backgroundImage from '../../../MyAsset/image/DSC05898.jpg';
import pic from '../../../MyAsset/image/Cohort 14 (6).png'
import name from '../../../MyAsset/image/Screenshot 2023-05-18 140234.png';

function Portfolio() {
  return (
    <div className="portfolio-container">
    
     <div className="overlay">
     <div className='top'>
          <button className="home-button">Home</button>
          <button className="home-button1">About</button>
          <button className="home-button2">Service</button>
          <button className="home-button3">Portfolio</button>
          <button className="home-button3">Contact</button>
      </div>
      <div className='middle'>
        <h1>Software Developer</h1>
      <div className='middle1'>
        <h1>Hi, I'm  Deborah Emmanuel</h1>
        </div>
      <div className="portfolio-container2">
      <div className='port2'>
        <img src={pic} alt="" className='james' />
      </div>
        <div className="port">
          <h2>About Me</h2>
          <h9>HI, I'm Emmanuel Deborah, a software engineer 💻.</h9>
      <p>Deborah is a highly skilled software engineer</p>
      <p>Deborah's thirst for knowledge and her unwavering commitment to </p>
      <p>excellence have enabled her to become a leading professional in her field.</p>
      <p>She graduated from Semicolon Africa 🎓, a renowned technology institution</p>
      <p> that has a reputation for producing top-notch professionals in the field of </p>
      <p>software engineering.</p>
      <p>Her strong academic background and experience in the industry make her a valuable asset</p>
      <p> to any team she joins.</p>
      <p>Deborah has a wealth of knowledge and skills that enable her to develop innovative solutions</p>
      <p> to complex software problems 💡.</p>
      <p>As a software engineer, Deborah is dedicated to making a positive impact in the world through </p>
      <p>her work 🌍. She is  committed to using technology to drive positive change and is always exploring new ways to apply her skills and knowledge to create solutions that make a difference 🌟.</p>
      </div>
      </div>
      <div className="portfolio-container3">
        <h1 className='head'>My Services</h1>
        <div className='theBox'>
          <div className='box1'>
          {/* <img src={name} alt="" className='jame' /> */}
          <h1 className='world'> 🌍</h1>
          <h3 className='head2'>Web Development</h3>
          <p>Elevating your client online <br/>experience is our expertise</p>
  <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
  </a>
          </div>
          <div className='box2'>
            <h1 className='bulb'> 💡</h1>
            <h3 className='head3'>Android & IOs<br/> Apps <br/>Development</h3>
            <p>We develop efficient, effective, lightweight application<br/> for better user experience</p>
          </div>
          <div className='box3'>
            <h1>🧲</h1>
            <h3>Software Engineering</h3>
            <p>We put user at the center <br/>
            of every stage of our SDLC and<br/>
           our products have been widely <br/>
           accepted by the target audience</p>
          </div>
        </div>
      </div>
     </div>
      
     </div>
    
    </div>
  );
}

export default Portfolio;
