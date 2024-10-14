import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import '../Style/Section.css'

function Section() {
    const Item = styled(Paper)(() => ({
     
      }));

      const imgCarosuel = ['three.jpg','3 1c60a4cf-676c-4670-9f55-c72e5564ff97_600x600.jpg']
  return (
  <>
 <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid size="grow" >
         <img src="unisex_18260c33-e1e2-4e0b-9d90-ab82b8021578.jpg" alt=""  className='img1'/>
        </Grid>
        <Grid item xs={6}>
            {/* Display images in a single row */}
            <Grid container spacing={2} direction="row">
              {imgCarosuel.map((imgSrc, index) => (
                <Grid item xs={6} key={index}>
                  <img src={imgSrc} alt={`Carousel ${index}`} className="img-carousel" />
                </Grid>
              ))}
            </Grid>
          </Grid>

        <Grid size="grow">
        <img src="hoodie_12d33cd0-c765-46de-89e1-52394b2956d4.jpg" alt="" className='img1'/>
        </Grid>
      </Grid>
    </Box>
  </>
  )
}

export default Section