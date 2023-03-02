import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Title = ({ size, text, children }) => {
  !size ? size = "h1" : size=size;
  size != ("h1" && "h2" && "h3" && "h4" && "h5") ? size = "h1" : size=size; 
  return (
    <>
      <Typography component="div">
        <Box sx={{ fontSize: `${size}.fontSize`, m: 1 }}>
          {text}
          {children}
        </Box>
      </Typography>
    </>
  )
}
