import React from 'react';
import "./About.css";
import samhitaaImage from '../../images/samhitaa.jpeg';
import saniyaImage from '../../images/saniya.jpeg';
import anupriyaImage from '../../images/anupriya.jpeg';

function About() {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-header'>
          <h2>LibSearch: Your Ultimate Book Finder</h2>
          <p>Empowering book enthusiasts with seamless search capabilities</p>
        </div>

        <div className='about-content'>
          <div className='about-text'>
            <h2 className='about-title'>Revolutionizing the Way You Discover Books</h2>
            <p className='fs-17'>LibSearch is a dynamic book search engine created by three passionate students with a mission to simplify book discovery. By leveraging advanced algorithms and an extensive database, we ensure users find their desired books effortlessly.</p>
            <p className='fs-17'>From academic resources to leisure reading, LibSearch offers a refined and intuitive browsing experience, making it easier than ever to locate and explore books across genres and disciplines.</p>
            <p className='fs-17'>Join our journey in making knowledge accessible, efficient, and engaging for everyone.</p>
          </div>
          <div className='about-creators'>
            <div className='creator-card'>
              <div className='creator-image'>
                <img src={samhitaaImage} alt="Samhitaa Saravanakumar" />
              </div>
              <h3>Samhitaa Saravanakumar</h3>
              <p>Reg No: 23BCB0125</p>
            </div>
            <div className='creator-card'>
              <div className='creator-image'>
                <img src={saniyaImage} alt="Saniya Goyal" />
              </div>
              <h3>Saniya Goyal</h3>
              <p>Reg No: 23BCE2126</p>
            </div>
            <div className='creator-card'>
              <div className='creator-image'>
                <img src={anupriyaImage} alt="Anupriya Singh" />
              </div>
              <h3>Anupriya Singh</h3>
              <p>Reg No: 23BCE0652</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
