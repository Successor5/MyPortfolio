import React from 'react';
import '../styles/portfolio.css';
import pic from '../../../MyAsset/image/Cohort 14 (6).png';
import clock from '../../../MyAsset/image/Screenshot 2023-05-18 160522.png';
import login from '../../../MyAsset/image/Screenshot 2023-05-11 120853.png';
import tracker from  '../../../MyAsset/image/Screenshot 2023-04-28 115833.png';
import { ReactComponent as git} from '../../../MyAsset/git.svg';

function Portfolio() {

  function scrollToBottom(timedelay=25) {
    var scrollId;
    var height = 3;
    var minScrollHeight = 80;
    scrollId = setInterval(function () {
        if (height <= document.body.scrollHeight) {
            window.scrollBy(0,15.4 );
        }
        else {
            clearInterval(scrollId);
        }
        height += minScrollHeight;
    }, timedelay);           
    }


function scrollToBottom1(timedelay=25) {
  var scrollId;
  var height = 3;
  var minScrollHeight = 80;
  scrollId = setInterval(function () {
      if (height <= document.body.scrollHeight) {
          window.scrollBy(0,31.5 );
      }
      else {
          clearInterval(scrollId);
      }
      height += minScrollHeight;
  }, timedelay);           
    }
function scrollToBottom2(timedelay=25) {
  var scrollId;
  var height = 3;
  var minScrollHeight = 80;
  scrollId = setInterval(function () {
      if (height <= document.body.scrollHeight) {
          window.scrollBy(0,47.5 );
      }
      else {
          clearInterval(scrollId);
      }
      height += minScrollHeight;
  }, timedelay);           
    }

function scrollToBottom3(timedelay=25) {
  var scrollId;
  var height = 3;
  var minScrollHeight = 80;
  scrollId = setInterval(function () {
      if (height <= document.body.scrollHeight) {
          window.scrollBy(0,65 );
      }
      else {
          clearInterval(scrollId);
      }
      height += minScrollHeight;
  }, timedelay);         
}
scrollToBottom()
scrollToBottom1()
scrollToBottom2()
// const button1 = document.querySelector('button');
// button1.addEventListener('click',function(){
//   console.log('button clicked');
// }
  
  return (
    <div className="portfolio-container">
      <div className="overlay">
        <div className='top'>
          <text className="home-button">Home</text>
          <text className="home-button1" onClick={scrollToBottom}>About</text>
          <text className="home-button2" onClick={scrollToBottom1}>Service</text>
          <text className="home-button3" onClick={scrollToBottom2}>Portfolio</text>
          <text className="home-button3"onClick={scrollToBottom3}>Contact</text>
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
              <p>Deborah's thirst for knowledge and her unwavering commitment to</p>
              <p>excellence have enabled her to become a leading professional in her field.</p>
              <p>She graduated from Semicolon Africa 🎓, a renowned technology institution</p>
              <p>that has a reputation for producing top-notch professionals in the field of</p>
              <p>software engineering.</p>
              <p>Her strong academic background and experience in the industry make her a valuable asset</p>
              <p>to any team she joins.</p>
              <p>Deborah has a wealth of knowledge and skills that enable her to develop innovative solutions</p>
              <p>to complex software problems 💡.</p>
              <p>As a software engineer, Deborah is dedicated to making a positive impact in the world through</p>
              <p>her work 🌍. She is committed to using technology to drive positive change and is always exploring new ways to apply her skills and knowledge to create solutions that make a difference 🌟.</p>
            </div>
          </div>
          <div className="portfolio-container3">
            <h1 className='head'>My Services</h1>
            <div className='theBox'>
              <div className='box1'>
                <h1 className='world'> 🌍</h1>
                <h3 className='head2'>Web Development</h3>
                <p>Elevating your client online <br/>experience is our expertise</p>
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
          <div className='portfolio-container4'  >
          <h1 className='downHead'>Project Gallery</h1>
            <div className='flex'>
              <div className='clock'>
              <img src={clock} alt="" className='clock'/>
              <h3 className='clockText'>Clock App</h3>
            </div>
            <div className='log'>
              <img src={login} alt=""  className='login'/>
              <h3 className='loginText'>Registration App </h3>
            </div>
            <div className='Tracker'>
              <img src={tracker} alt=""  className='tracker'/>
              <h3 className='trackerText'>Period Tracker</h3>
            </div>
            </div>
          <button className="button">View More</button>
          </div>
          <div className='portfolio-container5'>
            <div className='left'>
            <h1 className='w'>Contact Me</h1>
            <p>🎯  debby71711@gmail.com</p>
            <p className='call'>☎  +2348108926927</p>
            <git className="svg-icon" />

            </div>
            </div>
            <div className='last'>
              <p>Copyright © Emmanuel Deborah Olamide🔆</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
