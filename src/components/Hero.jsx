import { Box, Typography } from '@mui/material';
import React from 'react';
import { LastlButton, NutralButton } from './utils/Button';

const Hero = () => {
    return (
    <Box variant='header'
    margin='0'
    bgcolor="primary.main"
    borderRadius='0px 0px 0px 120px'
    >
        <Box variant='div'
        sx={{
            display: "flex",
            flexDirection: "column",
            height: {
                xs: "80vh",
                sm: "60vh",
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
                    my: "1.25rem",
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