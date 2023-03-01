import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Title = ({ size, text, children }) => {




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
