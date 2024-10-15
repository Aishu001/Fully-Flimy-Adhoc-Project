import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function SubCategory() {
  return (
   <>
   
   <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sub Category Name</TableCell>
              <TableCell align="right">Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
              <TableRow
               
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                
                </TableCell>
                <TableCell align="right">
            
                </TableCell>
              </TableRow>
         
          </TableBody>
        </Table>
      </TableContainer>
   </>
  )
}

export default SubCategory