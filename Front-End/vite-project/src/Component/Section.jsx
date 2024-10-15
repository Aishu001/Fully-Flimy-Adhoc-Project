import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Style/Section.css';

function Section() {
  const imgCarosuel = ['three.jpg', 'one.jpg', 'two.png','four.jpg','five.png'];

  const settings = {
    dots: true,             
    infinite: true,         
    speed: 900,             
    slidesToShow: 3,        
    slidesToScroll: 1,      
    autoplay: true,         
    autoplaySpeed: 2000,    
    cssEase: 'ease-in-out',
  };
  

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <h1>Trending Collection</h1>
        <Grid container spacing={3} direction="row" justifyContent="space-between" alignItems="center" >
      
          <Grid item xs={3}>
            <img
              src="unisex_18260c33-e1e2-4e0b-9d90-ab82b8021578.jpg"
              alt="Image 1"
              className="img1"
            />
          </Grid>
          <Grid item xs={6}>
        
          <Slider {...settings} className='carousel1'>
          {imgCarosuel.map((imgSrc, index) => ( 
                  <img src={imgSrc} alt={`Carousel ${index}`} className="img-carousel" />
              ))}
          </Slider>
             
           
          </Grid>
          <Grid item xs={3}>
            <img
              src="hoodie_12d33cd0-c765-46de-89e1-52394b2956d4.jpg"
              alt="Image 2"
              className="img1"
            />
          </Grid>
        </Grid>
      </Box>

    </>
  );
}

export default Section;

