import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import phoneIllustration from './../assets/images/illustration-phones.svg';

const Infrastructure = () => {
  return (
    <Box
    sx={{
      backgroundColor: "hsl(237, 23%, 32%)",
      borderRadius: "0 70px 0 70px",
      my: "7rem",
    }}
    >
      <Grid
      container
      spacing={0}
      >
        <Grid
        item
        xs={12}
        sm={6}
        >
          <Box
          sx={{position:"relative"}}
          >          
          <Box
          sx={{
            position: "absolute",
            left: '20px',
            top: "-95px"
          }}
          >
            <img src={phoneIllustration}
            alt="phoneIllustration" 
            style={{
              maxWidth: '100%',
              height: 'auto',
              display: 'block'
            }}
            />
          </Box>
          </Box>
        </Grid>
        <Grid
        item
        xs={12}
        sm={6}
        >
          <Box
          sx={{
            px: "1.5rem",
            py: "6rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: {
              xs: "center",
              sm: "flex-start",
            },
            alignContent: {
              xs: "center",
              sm: "left",
            }, 
            marginTop: {
              xs: "8.5rem",
              sm: "0",
            }
          }}
          >
            <Typography
            variant='h4'
            sx={{
              mt: {
                xs: "12rem",
                sm:"2rem",
              },
              color: "hsl(0, 0%, 100%)",
              fontFamily: "'Overpass', sans-serif",
              fontWeight: "600",
              textAlign: {
                xs: "center",
                sm: "left",
              }
            }}
            >
              State of the Art Infrastructure
            </Typography>
            <Typography
            sx={{
              color: "hsl(0, 0%, 100%)",
              fontFamily: "'Overpass', sans-serif",
              fontWeight: "300",
              textAlign: {
                xs: "center",
                sm: "left",
              }
            }}
            >
              With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
              This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Infrastructure;