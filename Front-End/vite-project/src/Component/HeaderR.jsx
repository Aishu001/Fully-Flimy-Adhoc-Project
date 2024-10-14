import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS

function HeaderR() {
    const [index, setIndex] = useState(0);
  
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
     <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="superstar1.png" 
            alt="First slide"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="f1_website_banner.png" 
            alt="Second slide"
          />
          <Carousel.Caption>
        
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="phonecase.jpg" // Replace with your image URL
            alt="Third slide"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="Banner_2_03f5e8fb-94e6-4f83-a232-57ed7a662049.jpg " 
            alt="Third slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    
      <img
        className="egg"
        src="eggy-quotes.png"
        alt="First slide"
      />

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffd700"
          fillOpacity="1"
          d="M0,128L16,138.7C32,149,64,171,96,197.3C128,224,160,256,192,240C224,224,256,160,288,149.3C320,139,352,181,384,218.7C416,256,448,288,480,282.7C512,277,544,235,576,202.7C608,171,640,149,672,138.7C704,128,736,128,768,133.3C800,139,832,149,864,176C896,203,928,245,960,234.7C992,224,1024,160,1056,117.3C1088,75,1120,53,1152,90.7C1184,128,1216,224,1248,261.3C1280,299,1312,277,1344,266.7C1376,256,1408,256,1424,256L1440,256L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"
        />
      </svg>
    </>
  )
}

export default HeaderR