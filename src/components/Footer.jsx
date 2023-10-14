import { Box, List, ListItem, Typography, Link } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
    <Box bgcolor="hsl(237, 23%, 32%)"
    borderRadius='0 50px 0 0'
    sx={{
        marginTop: {
            xs: "3rem",
            sm: "19rem",
        },
        py: "4.5rem",

    }}
    >
        <Box 
        sx={{
            display: "flex",
            justifyContent: {
                xs: "center",
                sm: "space-around",
            },
            alignItems: {
                xs: "center",
                sm: "flex-start",
            },
            flexDirection: {
                xs: "column",
                sm: "row",
            }
        }}
        >
            <Typography
            variant='h4'
            sx={{
                textTransform: "capitalize",
                color: "hsl(0, 0%, 100%)",
                fontFamily: "'Ubuntu', sans-serif",
                fontWeight: "700",
                textAlign: {
                    xs: "center",
                    sm: "left",
                },
                my: {
                    xs: "1.5rem",
                    sm: "0",
                }
                }}
            >
                blogr
            </Typography>
            <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.8rem",
            }}
            >
                <Typography
                sx={{
                    textTransform: "capitalize",
                    color: "hsl(0, 0%, 100%)",
                    fontFamily: "'Overpass', sans-serif",
                    fontWeight: "600",
                    cursor: "pointer",
                    textAlign: {
                        xs: "center",
                        sm: "left",
                    },
                    justifyContent: {
                        xs: 'center',
                        sm: "flex-start"
                    },
                    display: "flex",
                }}
                >
                    Products
                </Typography>
                <Box>
                    <List
                    sx={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: {
                            xs: "center",
                            sm: "space-evenly",
                        },
                        alignItems: "center",
                    }}
                    >
                        <ListItem>
                            <Link href='#overview'
                            underline='none'
                            sx={{
                                textTransform: "capitalize",
                                color:"hsl(240, 2%, 79%)",
                                fontFamily: "'Overpass', sans-serif",
                                fontWeight: "300",
                                textAlign: {
                                xs: "center",
                                sm: "left",
                                },
                                mx: {
                                    xs: "auto",
                                    sm: "0",
                                }
                                }}
                            >
                                Overview
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='#Pricing'
                            underline='none'
                            sx={{
                                textTransform: "capitalize",
                                color:"hsl(240, 2%, 79%)",
                                fontFamily: "'Overpass', sans-serif",
                                fontWeight: "300",
                                textAlign: {
                                xs: "center",
                                sm: "left",
                                },
                                mx: {
                                    xs: "auto",
                                    sm: "0",
                                }
                                }}
                            >
                                Pricing
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='#Marketplace'
                            underline='none'
                            sx={{
                                textTransform: "capitalize",
                                color:"hsl(240, 2%, 79%)",
                                fontFamily: "'Overpass', sans-serif",
                                fontWeight: "300",
                                textAlign: {
                                xs: "center",
                                sm: "left",
                                },
                                mx: {
                                    xs: "auto",
                                    sm: "0",
                                }
                                }}
                            >
                                Marketplace
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='#Features'
                            underline='none'
                            sx={{
                                textTransform: "capitalize",
                                color:"hsl(240, 2%, 79%)",
                                fontFamily: "'Overpass', sans-serif",
                                fontWeight: "300",
                                textAlign: {
                                xs: "center",
                                sm: "left",
                                },
                                mx: {
                                    xs: "auto",
                                    sm: "0",
                                }
                                }}
                            >
                                Features
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='#Integrationss'
                            underline='none'
                            sx={{
                                textTransform: "capitalize",
                                color:"hsl(240, 2%, 79%)",
                                fontFamily: "'Overpass', sans-serif",
                                fontWeight: "300",
                                textAlign: {
                                xs: "center",
                                sm: "left",
                                },
                                mx: {
                                    xs: "auto",
                                    sm: "0",
                                }
                                }}
                            >
                                Integrations
                            </Link>
                        </ListItem>
                    </List>
                </Box>
            </Box>
            <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.8rem",
            }}
            >
                <Typography
                sx={{
                    textTransform: "capitalize",
                    color: "hsl(0, 0%, 100%)",
                    fontFamily: "'Overpass', sans-serif",
                    fontWeight: "600",
                    cursor: "pointer",
                    textAlign: {
                        xs: "center",
                        sm: "left",
                    },
                    justifyContent: {
                        xs: 'center',
                        sm: "flex-start"
                    },
                    display: "flex",
                }}
                >
                    Company
                </Typography>
                <Box>
                    <List
                    sx={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: {
                            xs: "center",
                            sm: "space-evenly",
                        },
                        alignItems: "center",
                    }}
                    >
                        <ListItem>
                            <Link href='#About'
                            underline='none'
                            sx={{
                                textTransform: "capitalize",
                                color:"hsl(240, 2%, 79%)",
                                fontFamily: "'Overpass', sans-serif",
                                fontWeight: "300",
                                textAlign: {
                                xs: "center",
                                sm: "left",
                                },
                                mx: {
                                    xs: "auto",
                                    sm: "0",
                                }
                                }}
                            >
                                About
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='#Team'
                            underline='none'
                            sx={{
                                textTransform: "capitalize",
                                color:"hsl(240, 2%, 79%)",
                                fontFamily: "'Overpass', sans-serif",
                                fontWeight: "300",
                                textAlign: {
                                xs: "center",
                                sm: "left",
                                },
                                mx: {
                                    xs: "auto",
                                    sm: "0",
                                }
                                }}
                            >
                                Team
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='#Blog'
                            underline='none'
                            sx={{
                                textTransform: "capitalize",
                                color:"hsl(240, 2%, 79%)",
                                fontFamily: "'Overpass', sans-serif",
                                fontWeight: "300",
                                textAlign: {
                                xs: "center",
                                sm: "left",
                                },
                                mx: {
                                    xs: "auto",
                                    sm: "0",
                                }
                                }}
                            >
                                Blog
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='#Careers'
                            underline='none'
                            sx={{
                                textTransform: "capitalize",
                                color:"hsl(240, 2%, 79%)",
                                fontFamily: "'Overpass', sans-serif",
                                fontWeight: "300",
                                textAlign: {
                                xs: "center",
                                sm: "left",
                                },
                                mx: {
                                    xs: "auto",
                                    sm: "0",
                                }
                                }}
                            >
                                Careers
                            </Link>
                        </ListItem>
                    </List>
                </Box>
            </Box>
            <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.8rem",
            }}
            >
                <Typography
                sx={{
                    textTransform: "capitalize",
                    color: "hsl(0, 0%, 100%)",
                    fontFamily: "'Overpass', sans-serif",
                    fontWeight: "600",
                    cursor: "pointer",
                    textAlign: {
                        xs: "center",
                        sm: "left",
                    },
                    justifyContent: {
                        xs: 'center',
                        sm: "flex-start"
                    },
                    display: "flex",
                }}
                >
                    Connect
                </Typography>
                <Box>
                    <List
                    sx={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: {
                            xs: "center",
                            sm: "space-evenly",
                        },
                        alignItems: "center",
                    }}
                    >
                        <ListItem>
                            <Link href='#Contact'
                            underline='none'
                            sx={{
                                textTransform: "capitalize",
                                color:"hsl(240, 2%, 79%)",
                                fontFamily: "'Overpass', sans-serif",
                                fontWeight: "300",
                                textAlign: {
                                xs: "center",
                                sm: "left",
                                },
                                mx: {
                                    xs: "auto",
                                    sm: "0",
                                }
                                }}
                            >
                                Contact
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='#Newsletter'
                            underline='none'
                            sx={{
                                textTransform: "capitalize",
                                color:"hsl(240, 2%, 79%)",
                                fontFamily: "'Overpass', sans-serif",
                                fontWeight: "300",
                                textAlign: {
                                xs: "center",
                                sm: "left",
                                },
                                mx: {
                                    xs: "auto",
                                    sm: "0",
                                }
                                }}
                            >
                                Newsletter
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='#LinkedIn'
                            underline='none'
                            sx={{
                                textTransform: "capitalize",
                                color:"hsl(240, 2%, 79%)",
                                fontFamily: "'Overpass', sans-serif",
                                fontWeight: "300",
                                textAlign: {
                                xs: "center",
                                sm: "left",
                                },
                                mx: {
                                    xs: "auto",
                                    sm: "0",
                                }
                                }}
                            >
                                LinkedIn
                            </Link>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Box>
    </Box>
)}

export default Footer