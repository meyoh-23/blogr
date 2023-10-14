import React, {useState} from 'react';
import { AppBar, Box,Button, Drawer, Link, List, ListItem, Typography } from '@mui/material';
import { PrimaryButton, SecondaryButton} from './utils/Button'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [navItemOne, setNavItemOne] = useState( false);
    const [navItemTwo, setNavItemTwo] = useState( false);
    const [navItemThree, setNavItemThree] = useState(false);

    return (
        <Box 
        >
            <AppBar
            elevation={0}
            variant='nav'
            position='sticky'
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                px: {
                    xs: "2rem",
                    sm: "3rem",
                },
                py: "3rem",
                backgroundColor: "transparent",
            }}
            >
                <Box
                sx={{
                    display:"flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
                >
                    <Typography
                    variant='h4'
                    sx={{
                        textTransform: "capitalize",
                        color: "hsl(0, 0%, 100%)",
                        fontFamily: "'Ubuntu', sans-serif",
                        fontWeight: "700",
                    }}
                    >
                        blogr
                    </Typography>
                    <Box sx={{
                        display: {
                            xs: "none",
                            sm: "flex",
                        },
                        flexDirection: "row",
                        marginLeft: "2rem"
                    }}>
                        <List
                        sx={{
                            listStyle: "none",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                        }}
                        >
                            <Link
                            underline='none'
                            href='#products'
                            onClick={()=>setNavItemOne(!navItemOne)}
                            sx={{
                                color: "hsl(240, 2%, 79%)",
                                fontFamily: "'Overpass', sans-serif;",
                                fontSize: "1rem",
                                fontWeight: "600",
                                textTransform: "capitalize",
                                "&:hover" : {
                                    textDecoration: "underliner",
                                    color: "hsl(0, 0%, 100%)",
                                }
                            }}
                            >
                                <span style={{whiteSpace: "nowrap"}}>
                                    products{
                                    navItemOne? <ExpandLessIcon/>
                                    : <ExpandMoreIcon/>
                                }
                                </span>
                            </Link>
                            <Link
                            href='#company'
                            underline='none'
                            onClick={()=>setNavItemTwo(!navItemTwo)}
                            sx={{
                                color: "hsl(240, 2%, 79%)",
                                fontFamily: "'Overpass', sans-serif;",
                                fontSize: "1rem",
                                fontWeight: "600",
                                textTransform: "capitalize",
                                "&:hover" : {
                                    textDecoration: "underliner",
                                    color: "hsl(0, 0%, 100%)"
                                }
                            }}
                            >
                                <span style={{whiteSpace: "nowrap"}}>
                                    company{
                                    navItemTwo? <ExpandLessIcon/>
                                    : <ExpandMoreIcon/>
                                }
                                </span>
                            </Link>
                            <Link
                            underline='none'
                            sx={{
                                color: "hsl(240, 2%, 79%)",
                                fontFamily: "'Overpass', sans-serif;",
                                fontSize: "1rem",
                                fontWeight: "600",
                                textTransform: "capitalize",
                                "&:hover" : {
                                    textDecoration: "underliner",
                                    color: "hsl(0, 0%, 100%)"
                                },
                                position: "relative",
                            }}
                            onClick={()=>setNavItemThree(!navItemThree)}
                            >
                                <span style={{whiteSpace: "nowrap"}}>
                                    connect{
                                    navItemThree? <ExpandLessIcon/>
                                    : <ExpandMoreIcon/>
                                }
                                </span>
                                
                            {navItemThree && <Box
                                sx={{
                                    width: "150px",
                                    height: "auto",
                                    position: "absolute",
                                    top: "40px",
                                    left: "-10px",
                                    background: "hsl(0, 0%, 100%)",
                                    borderRadius: "20px",
                                }}
                                >
                                    <List
                                    listStyle="none"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        padding: "0.8rem"
                                    }}
                                    >
                                        <ListItem>
                                            <Link href='#contacts'
                                            underline='none'
                                            sx={{
                                                color: "hsl(237, 17%, 21%)",
                                                fontFamily:"'Overpass', sans-serif",
                                                textTransform: "capitalize",
                                                fontWeight: "300",
                                                fontSize: "1.2rem",
                                                "&: hover": {
                                                    color: "hsl(207, 13%, 34%)",
                                                    cursor: "pointer",
                                                },
                                            }}
                                            >
                                                Contact
                                            </Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link href='#linkedIn'
                                            underline='none'
                                            sx={{
                                                color: "hsl(237, 17%, 21%)",
                                                fontFamily:"'Overpass', sans-serif",
                                                textTransform: "capitalize",
                                                fontWeight: "300",
                                                fontSize: "1.2rem",
                                                "&: hover": {
                                                    color: "hsl(207, 13%, 34%)",
                                                    cursor: "pointer",
                                                },
                                            }}
                                            >
                                                linkedIn
                                            </Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link href='#newsletter'
                                            underline='none'
                                            sx={{
                                                color: "hsl(237, 17%, 21%)",
                                                fontFamily:"'Overpass', sans-serif",
                                                textTransform: "capitalize",
                                                fontWeight: "300",
                                                fontSize: "1.2rem",
                                                "&: hover": {
                                                    color: "hsl(207, 13%, 34%)",
                                                    cursor: "pointer",
                                                },
                                            }}
                                            >
                                                newsletter
                                            </Link>
                                        </ListItem>
                                    </List>
                                </Box>
                            }
                            </Link>
                        </List>
                    </Box>
                </Box>
                <Box
                sx={{
                    display:{
                        xs: "none",
                        sm: "flex",
                    },
                    px: "3rem",
                    justifyContent: "space-evenly",
                }}
                >
                    <SecondaryButton/>
                    <PrimaryButton/>
                </Box>
                <Button sx={{
                    display: {
                        xs: "flex",
                        sm: "none"
                    },
                    color: "hsl(240, 2%, 79%)",
                    width: "2.5rem",
                    height: "2.5rem",
                }}
                variant='text'
                onClick={()=> setMobileMenu(!mobileMenu)}
                >
                    {
                        mobileMenu? <CloseIcon/>
                        : <MenuIcon/>
                    }
                </Button>
                <Drawer
                PaperProps={{
                    sx: {
                        backgroundColor: "#fff",
                        marginTop: "7rem",
                        width: "90vw",
                        height: "auto",
                        mx: "auto",
                        borderRadius: "10px",
                    }
                }}
                anchor='top'
                open={mobileMenu}
                onClose={()=>setMobileMenu(false)}
                onOpen={()=>setMobileMenu(true)}
                >
                    <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                    >
                        <Box
                        sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        borderBottom: "1px solid hsl(240, 2%, 79%)"
                    }}
                        >
                            <List
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            borderBottom: "2px hsl(240, 2%, 79%)",
                            mx: "auto"
                        }}
                        >
                            <ListItem>
                                <Link href="#products"
                                underline='none'
                                onClick={()=>setNavItemOne(!navItemOne)}
                                sx={{
                                    textTransform: "capitalize",
                                    color: "hsl(240, 10%, 16%)",
                                    fontSize: "1rem",
                                    "&:hover": {
                                        color: "hsl(240, 2%, 79%)",
                                        cursor: "pointer",
                                    }

                                }}
                                >
                                    products {
                                    navItemOne? <ExpandLessIcon/>
                                    : <ExpandMoreIcon/>
                                    }
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="#company"
                                underline='none'
                                onClick={()=>setNavItemTwo(!navItemTwo)}
                                sx={{
                                    textTransform: "capitalize",
                                    color: "hsl(240, 10%, 16%)",
                                    fontSize: "1rem",
                                    "&:hover": {
                                        color: "hsl(240, 2%, 79%)",
                                        cursor: "pointer",
                                    }

                                }}
                                >
                                    company {
                                    navItemTwo? <ExpandLessIcon/>
                                    : <ExpandMoreIcon/>
                                    }
                                </Link>
                            </ListItem>
                            <ListItem
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                            >
                                <Link
                                underline='none'
                                onClick={()=>setNavItemThree(!navItemThree)}
                                sx={{
                                    textTransform: "capitalize",
                                    color: "hsl(240, 10%, 16%)",
                                    fontSize: "1rem",
                                    "&:hover": {
                                        color: "hsl(240, 2%, 79%)",
                                        cursor: "pointer",
                                    }
                                }}
                                >
                                    connect {
                                    navItemThree? <ExpandLessIcon/>
                                    : <ExpandMoreIcon/>
                                    }
                                </Link>
                                {navItemThree && <List 
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        borderBottom: "2px hsl(240, 2%, 79%)",
                                        mx: "auto"
                                    }}
                                    >
                                        <ListItem
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            width: "75vw",
                                            height: "auto",
                                            my: "1rem",
                                            alignContent: "center",
                                            justifyContent: "center",
                                            backgroundColor: "hsl(240, 2%, 79%)",
                                            borderRadius: "10px",
                                        }}
                                        >
                                            <Link
                                            underline='none'
                                            sx={{
                                                textTransform: "capitalize",
                                                color: "hsl(240, 10%, 16%)",
                                                fontSize: "1rem",
                                                my: "0.5rem",
                                                cursor: "pointer",
                                                fontFamily:"'Overpass', sans-serif",
                                                fontWeight: "300",
                                            }}
                                            >
                                                Contact
                                            </Link>
                                            <Link
                                            underline='none'
                                            sx={{
                                                textTransform: "capitalize",
                                                color: "hsl(240, 10%, 16%)",
                                                fontSize: "1rem",
                                                my: "0.5rem",
                                                cursor: "pointer",
                                                fontFamily:"'Overpass', sans-serif",
                                                fontWeight: "300",
                                            }}
                                            >
                                                newsletter
                                            </Link>
                                            <Link
                                            underline='none'
                                            sx={{
                                                textTransform: "capitalize",
                                                color: "hsl(240, 10%, 16%)",
                                                fontSize: "1rem",
                                                my: "0.5rem",
                                                cursor: "pointer",
                                                fontFamily:"'Overpass', sans-serif",
                                                fontWeight: "300",
                                            }}
                                            >
                                                linkedIn
                                            </Link>
                                        </ListItem>
                                    </List>}
                            </ListItem>
                        </List>
                        </Box>
                        <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-around",
                            py: "1rem",
                            mx: "auto",
                        }}
                        >
                            <SecondaryButton/>
                            <PrimaryButton/>
                        </Box>
                    </Box>
                </Drawer>
            </AppBar>
        </Box>
        
    )
}

export default Navbar;