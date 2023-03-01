import * as React from 'react';
import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import "./style.css"
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ClearIcon from '@mui/icons-material/Clear';
import { FaAngleDown,FaAngleRight } from 'react-icons/fa';

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'right' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Box className='apmeu' sx={{ display: "block" }}>
                    <Typography sx={{ marginTop: "20px", marginBottom: "20px", color: "rgba(0, 0, 0, 0.6)", textAlign: "end" }}>
                        <ClearIcon sx={{ fontSize: "30px" }} />
                    </Typography>
                    <Typography className='apbuu'>
                        <Link to="/"  className='aplii' style={{ color: "#212529" }}>
                            Home
                        </Link>
                    </Typography>
                    <Typography className='apbuu'>
                        <Link to="/rooms" className='aplii' style={{ color: "#212529" }}>
                            Rooms  <span style={{ color: "#212529",paddingLeft:"40%" }}><FaAngleDown /></span>
                        </Link>
                        <Box className='navhover3' >
                            <Typography className='navtay'>
                                <Link className='navlik3'>
                                    Standard Room
                                </Link>
                            </Typography>
                            <Typography className='navtay'>
                                <Link className='navlik3'>
                                    Family Room
                                </Link>
                            </Typography>
                            <Typography className='navtay'>
                                <Link className='navlik3'>
                                    Single Room
                                </Link>
                            </Typography>
                            <Typography className='navtayy'>
                                <Link className='navlik3'>
                                    Rooms
                                </Link>
                                <Box className='navhover2'>
                                    <Typography className='navtay'>
                                        <Link className='navlik3'>
                                            America
                                        </Link>
                                    </Typography>
                                    <Typography className='navtay'>
                                        <Link className='navlik3'>
                                            Europe
                                        </Link>
                                    </Typography>
                                    <Typography className='navtay'>
                                        <Link className='navlik3'>
                                            Europe
                                        </Link>
                                    </Typography>
                                    <Typography className='navtayy'>
                                        <Link className='navlik3'>
                                            Africa
                                        </Link>
                                    </Typography>
                                </Box>
                            </Typography>
                        </Box>
                    </Typography>
                    <Typography className='apbuu'>
                        <Link to="/events" className='aplii' style={{ color: "#212529" }}>
                            Events
                        </Link>
                    </Typography>
                    <Typography className='apbuu'>
                        <Link to="/about" className='aplii' style={{ color: "#212529" }}>
                            About
                        </Link>
                    </Typography>
                    <Typography className='apbuu'>
                        <Link to="/contact" className='aplii' style={{ color: "#212529" }}>
                            Contact
                        </Link>
                    </Typography>
                </Box>
            </List>
        </Box>
    );

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    const [navSize, setnavSize] = useState("8rem");
    const [navCo, setnavCo] = useState("");
    const [navFo, setnavFo] = useState("");
    const [navColor, setnavColor] = useState("transparent");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("#fff") : setnavColor("transparent");
        window.scrollX > 10 ? setnavSize("8rem") : setnavSize("5rem");
        window.scrollY > 10 ? setnavCo("#000") : setnavCo("#fff");
        window.scrollY > 10 ? setnavFo("rgba(0, 0, 0, 0.6)") : setnavFo("rgba(255, 255, 255, 0.6)");

    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <AppBar className='apbg' sx={{
            justifyContent: "center",
            backgroundColor: navColor,
            height: navSize,
            transition: "all 1s"
        }}>
            <Container maxWidth="xl" sx={{ width: { xl: "60%", lg: "80%", md: "95%", sm: "95%", xs: "95%" } }}>
                <Toolbar disableGutters >
                    <Typography
                        variant="h2"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: "Playfair Display",
                            fontWeight: 200,
                            color: navCo,
                            textDecoration: 'none',
                            width: "58%",
                            fontSize: "30px"
                        }}
                    >
                        Suites
                    </Typography>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: "Playfair Display",
                            fontWeight: 200,
                            color: navCo,
                            textDecoration: 'none',
                            width: "58%",
                            fontSize: "30px"
                        }}
                    >
                        Suites
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <Box sx={{ marginLeft: "65%" }} >
                            {['right'].map((anchor) => (
                                <>
                                    <React.Fragment key={anchor}>
                                        <IconButton
                                            size="large"
                                            aria-label="account of current user"
                                            aria-controls="menu-appbar"
                                            aria-haspopup="true"
                                            onClick={toggleDrawer(anchor, true)}
                                            sx={{ color: navCo, position: "relative" }}
                                        >
                                            <MenuIcon sx={{ fontSize: "25px" }} />
                                        </IconButton>
                                        <SwipeableDrawer
                                            anchor={anchor}
                                            open={state[anchor]}
                                            onClose={toggleDrawer(anchor, false)}
                                            onOpen={toggleDrawer(anchor, true)}
                                        >
                                            {list(anchor)}
                                        </SwipeableDrawer>
                                    </React.Fragment>
                                </>
                            ))}
                        </Box>
                    </Box>
                    <Box className='apmeu' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Typography className='apbu'>
                            <Link to="/" className='apli' style={{ color: navFo }}>
                                HOME
                            </Link>
                        </Typography>
                        <Typography className='apbur'>
                            <Link to="/rooms" className='apli' style={{ color: navFo, display: "flex", marginTop: "-8%", position: "relative" }}>
                                ROOMS <span style={{ color: navFo }}><FaAngleDown /></span>
                            </Link>
                            <Box className='navhover'>
                                <Typography className='navtay'>
                                    <Link className='navlik'>
                                        Standard Room
                                    </Link>
                                </Typography>
                                <Typography className='navtay'>
                                    <Link className='navlik'>
                                        Family Room
                                    </Link>
                                </Typography>
                                <Typography className='navtay'>
                                    <Link className='navlik'>
                                        Single Room
                                    </Link>
                                </Typography>
                                <Typography className='navtayy'>
                                    <Link className='navlik'>
                                        Rooms <span style={{textAlign:"right",paddingLeft:"50%"}}><FaAngleRight/></span>
                                    </Link>
                                    <Box className='navhover2'>
                                        <Typography className='navtay'>
                                            <Link className='navlik'>
                                                America
                                            </Link>
                                        </Typography>
                                        <Typography className='navtay'>
                                            <Link className='navlik'>
                                                Europe
                                            </Link>
                                        </Typography>
                                        <Typography className='navtay'>
                                            <Link className='navlik'>
                                                Europe
                                            </Link>
                                        </Typography>
                                        <Typography className='navtayy'>
                                            <Link className='navlik'>
                                                Africa
                                            </Link>
                                        </Typography>
                                    </Box>
                                </Typography>
                            </Box>
                        </Typography>
                        <Typography className='apbu'>
                            <Link to="/events" className='apli' style={{ color: navFo }}>
                                EVENTS
                            </Link>
                        </Typography>
                        <Typography className='apbu'>
                            <Link to="/about" className='apli' style={{ color: navFo }}>
                                ABOUT
                            </Link>
                        </Typography>
                        <Typography className='apbu'>
                            <Link to="contact" className='apli' style={{ color: navFo }}>
                                CONTACT
                            </Link>
                        </Typography>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;