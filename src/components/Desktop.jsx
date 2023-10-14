import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import laptopDesktopIllustration from './../assets/images/illustration-laptop-desktop.svg';
import laptopIllustrationMobile from './../assets/images/illustration-laptop-mobile.svg';

const Desktop = () => {
    return (
    <Box>
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
                sx={{
                    position: "relative"
                }}
                >
                    <Box
                    sx={{
                        display:{
                            xs: "none",
                            sm: "block",
                        },
                        position: "absolute",
                        left: "-245px",
                        top: "0px",
                    }}
                    >
                        <img src={laptopDesktopIllustration}
                            alt="laptopDesktopIllustration" 
                            style={{
                            maxWidth: '100%',
                            height: 'auto',
                            display: 'block'
                            }}
                        />
                    </Box>
                    <Box
                    sx={{
                        display: {
                            xs: "block",
                            sm: "none"
                        },
                        mx: "auto",
                    }}
                    >
                        <img src={laptopIllustrationMobile}
                            alt="laptopIllustrationMobile" 
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
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        marginTop: "6rem",
                    }}
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
                                justifyContent: {
                                    xs: "center",
                                    sm: "flex-start",
                                },
                                textAlign: {
                                    xs: "center",
                                    sm: "left",
                                },
                                }}
                            >
                            Free, open, simple
                        </Typography>
                        <Typography
                        variant='p'
                            sx={{
                            fontFamily: "'Overpass', sans-serif",
                            fontWeight: "300",
                            color: "hsl(207, 13%, 34%)",
                            justifyContent: {
                                    xs: "center",
                                    sm: "flex-start",
                                },
                                textAlign: {
                                    xs: "center",
                                    sm: "left",
                                },
                                display: "flex",
                            }}
                        >
                            Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                            features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                            and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                        </Typography>
                        <Typography 
                            variant='h5'
                            sx={{
                                color: "seondary.main",
                                fontFamily: "'Overpass', sans-serif",
                                fontWeight: "600",
                                my: "1.5rem",
                                justifyContent: {
                                    xs: "center",
                                    sm: "flex-start",
                                },
                                textAlign: {
                                    xs: "center",
                                    sm: "left",
                                },
                                }}
                            >
                            Powerful tooling
                        </Typography>
                        <Typography
                        variant='p'
                            sx={{
                            fontFamily: "'Overpass', sans-serif",
                            fontWeight: "300",
                            color: "hsl(207, 13%, 34%)",
                            justifyContent: {
                                    xs: "center",
                                    sm: "flex-start",
                                },
                                textAlign: {
                                    xs: "center",
                                    sm: "left",
                                },
                                display: "flex",
                            }}
                        >
                            Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                            capable of producing even the most complicated sites.
                    </Typography>
                </Box>
                </Box>
            </Grid>
        </Grid>
    </Box>
)}
export default Desktop;