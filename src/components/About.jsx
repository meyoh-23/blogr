import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import bgCirclePattern from './../assets/images/illustration-editor-desktop.svg';
import bgCircleMobile from './../assets/images/illustration-editor-mobile.svg';

const About = () => {
  return (
    <Box
    sx={{
      my: "4rem",
    }}
    >
      <Typography
      variant='h4'
      sx={{
        color: "seondary.main",
        fontFamily: "'Overpass', sans-serif",
        fontWeight: "600",
        textAlign: "center",
        justifySelf: "center",
        my: "3rem",
      }}
      >
        Designed for the future
      </Typography>
      <Box
      sx={{
        display: {
          xs: "none",
          sm: "flex",
        },
        marginLeft: "3rem",
        marginRight: "0",
      }}
      >
        <Grid
        container
        spacing={0}
        >
          <Grid
          item
          xs={6}
          >
            <Box
            sx={{
              marginLeft: "1.5rem",
              textAlign: "left",
              paddingRight: "2.5rem",
              marginBottom: "3rem",
            }}
            >
              <Typography 
              variant='h5'
              sx={{
                  color: "seondary.main",
                  fontFamily: "'Overpass', sans-serif",
                  fontWeight: "600",
                  my: "1.5rem",
                }}
              >
                Introducing an extensible editor
              </Typography>
                <Typography
                variant='p'
                sx={{
                  fontFamily: "'Overpass', sans-serif",
                  fontWeight: "300",
                  color: "hsl(207, 13%, 34%)",
                }}
                >
                  Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                  change the looks of a blog.
                </Typography>
            </Box>
            <Box
            sx={{
              marginLeft: "1.5rem",
              textAlign: "left",
              paddingRight: "2.5rem",
              marginBottom: "3rem",
            }}
            >
              <Typography 
              variant='h5'
              sx={{
                  color: "seondary.main",
                  fontFamily: "'Overpass', sans-serif",
                  fontWeight: "600",
                  my: "1.5rem",
                }}
              >
                Robust content management
              </Typography>
                <Typography
                variant='p'
                sx={{
                  fontFamily: "'Overpass', sans-serif",
                  fontWeight: "300",
                  color: "hsl(207, 13%, 34%)",
                }}
                >
                  Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                  by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                </Typography>
            </Box>
          </Grid>
          <Grid
          item
          xs={6}
          position='relative'
          >
            <Box
            sx={{
              marginLeft: "3rem",
              top: "0",
            }}
            >
              <Box>
                <img src={bgCirclePattern} alt="bgCirclePattern" 
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  display: 'block'
                }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
      sx={{
        display: {
          xs: "flex",
          sm: "none",
        },
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mx: "1.5rem",
      }}
      >
        <Box
        sx={{
          backgroundImage: `url(${bgCircleMobile})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "340px",

        }}
        >

        </Box>
        <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
          justifyContent: "center",
          alignItems: "center",
        }}
        >
          <Typography 
              variant='h5'
              sx={{
                  color: "seondary.main",
                  fontFamily: "'Overpass', sans-serif",
                  fontWeight: "600",
                  justifyContent: "center",
                  textAlign: "center",
                  mx: "3.3rem",
                }}
              >
                Introducing an extensible editor
              </Typography>
                <Typography
                variant='p'
                sx={{
                  fontFamily: "'Overpass', sans-serif",
                  fontWeight: "300",
                  color: "hsl(207, 13%, 34%)",
                  ustifyContent: "center",
                  textAlign: "center",
                }}
                >
                  Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                  change the looks of a blog.
                </Typography>
          <Typography 
              variant='h5'
              sx={{
                  color: "seondary.main",
                  fontFamily: "'Overpass', sans-serif",
                  fontWeight: "600",
                  justifyContent: "center",
                  textAlign: "center",
                  mx: "3.3rem",
                }}
              >
                Robust content management
              </Typography>
                <Typography
                variant='p'
                sx={{
                  fontFamily: "'Overpass', sans-serif",
                  fontWeight: "300",
                  color: "hsl(207, 13%, 34%)",
                  ustifyContent: "center",
                  textAlign: "center",
                }}
                >
                  Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                  by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
                </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default About