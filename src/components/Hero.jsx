import { Box, Typography } from '@mui/material';
import React from 'react';
import { LastlButton, NutralButton } from './utils/Button';
import Navbar from './Navbar';
import desktopHeroPatten from './../assets/images/bg-pattern-intro-desktop.svg';
import mobileHeroPattern from './../assets/images/bg-pattern-intro-mobile.svg';

const Hero = () => {
    return (
    <Box variant='header'
    margin='0'
    bgcolor="hsl(13, 100%, 72%)"
    borderRadius='0px 0px 0px 120px'
    sx={{
        backgroundImage: {
            xs: `url(${desktopHeroPatten})`,
            sm: `url(${mobileHeroPattern})`,
        },
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }}
    >
        <Navbar/>
        <Box variant='div'
        sx={{
            display: "flex",
            flexDirection: "column",
            height: {
                xs: "80vh",
                sm: "70vh",
            },
            justifyContent: "center",
            alignItems: "center",
        }}
        >
            <Box>
                <Typography
                variant='h4'
                sx={{
                    color: "hsl(0, 0%, 100%)",
                    fontFamily: "'Overpass', sans-serif",
                    fontWeight: "600",
                    textAlign: "center",
                    my: "2.25rem",
                    paddingTop: "4.5rem",
                }}
                >
                    A modern <br/> publishing platform
                </Typography>
                <Typography
                variant='p'
                sx={{
                    color: "hsl(0, 0%, 100%)",
                    fontFamily: "'Overpass', sans-serif",
                    display: "grid",
                    placeContent: "center",
                    my: "1.25rem",
                    mx: "2.5rem",
                    textAlign: "center",
                    justifyContent: "center",
                    fontWeight: "500",
                    lineHeight: "1.5rem"
                }}
                >
                    Grow your audience and build your online brand
                </Typography>
                <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    mx: "auto",
                    gap: "4rem",
                    px: "1rem",
                }}
                >
                    <NutralButton/>
                    <LastlButton/>
                </Box>
            </Box>
        </Box>
    </Box>
)}

export default Hero