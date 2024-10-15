import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { BarChart } from '@mui/x-charts/BarChart';

import { LineChart } from '@mui/x-charts/LineChart';
function AdminDashboard() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

  const styleProperty = {

      fontWeight: 'bold',       
      fontFamily: 'Arial, sans-serif',  
      textAlign: 'left',       
      borderBottom: '1px solid #23374b',
      padding: '15px',
      fontSize:'18px',
      color: '#16518c',
    
  }
  return (
    <>
    <div>
     <h1>DashBoard</h1>
    </div>
   <Box >
         <Grid container spacing={2}>
           <Grid size={{ xs: 6, md: 3 }}>
             <Item className='tag'>
             <p style={styleProperty}>
           Sales Card
         </p>
               <p>  View Details</p>
             </Item>
             
           </Grid>
           <Grid size={{ xs: 6, md: 3 }}>
           <Item className='tag'>
               <p  style={styleProperty}>  Profit Card</p>
               <p >  View Details</p>
             </Item>
           </Grid>
           <Grid size={{ xs: 6, md: 3 }}>
           <Item className='tag'>
               <p  style={styleProperty}> Activity </p>
               <p> View Details</p>
             </Item>
           </Grid>
           <Grid size={{ xs: 6, md: 3 }}>
           <Item className='tag'>
               <p  style={styleProperty}> Order Card </p>
               <p>  View Details</p>
             </Item>
           </Grid>
         
         </Grid>
         <br />
         <br />
         <br />
       </Box>
       <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={2}>
           <Grid size={{ xs: 6, md: 6 }}>
           <BarChart
         xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
         series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
         width={800}
         height={600}
       />
           </Grid>
         
           <Grid size={{ xs: 6, md: 6 }}>
           <LineChart
         xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
         series={[
           {
             data: [2, 5.5, 2, 8.5, 1.5, 5],
             area: true,
           },
         ]}
         width={700}
         height={600}
       />
           </Grid>
         </Grid>
       </Box>
   
    </>
)}

export default AdminDashboard