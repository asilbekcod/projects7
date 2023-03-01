import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import rasm from "../../img/img_2.jpg.webp"
import rasm1 from "../../img/img_1.jpg.webp"
import { Caro, Datta, Fara, img, Marga } from './map'
import "./style.css"
import { HiArrowSmRight } from "react-icons/hi";
import Carousel from "react-elastic-carousel";
import Carousell from './map/shsh'

function Home() {

    const breakPoints = [
        { width: 100, itemsToShow: 1, showArrows: false },
        { width: 550, itemsToShow: 1, showArrows: false },
        { width: 768, itemsToShow: 3, showArrows: false },
        { width: 1200, itemsToShow: 5, showArrows: false },
    ];
    
    const breakPoints1 = [
        { width: 100, itemsToShow: 1, showArrows: false },
        { width: 550, itemsToShow: 1, showArrows: false },
        { width: 768, itemsToShow: 2, showArrows: false },
        { width: 1200, itemsToShow: 5, showArrows: false },
    ];


    return (
        <Box>
            

            <Box>
                <Carousell/>
            </Box>
            <Box sx={{ width: "100%", height: "auto", background: "#f8f9fa", p: "0 0 80px 0" }}>
                <Container>
                    <Box sx={{ mb: "80px  ", mt: "60px" }}>
                        <Typography sx={{
                            fontSize: "40px",
                            fontFamily: "Playfair Display",
                            textAlign: "center"
                        }}>
                            Our Rooms
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography sx={{ width: "100px", height: "1px", background: "#000", }}></Typography>
                        </Box>
                    </Box>


                    <Grid container spacing={5}>
                        {img.map((v,i) => (
                            <Grid item lg={4} md={4} sm={6} xs={12} key={i}>
                                <img src={v.rasm} alt="" style={{ width: "100%" }} className="img" />
                                <Box sx={{
                                    width: "auto",
                                    height: "auto",
                                    background: "white",
                                    mt: "-5px",
                                    p: "30px",
                                    "&:hover": {
                                    }
                                }}>
                                    <Typography sx={{ textAlign: "center", fontSize: "20px" }}>
                                        {v.room}
                                    </Typography>
                                    <Typography sx={{ textAlign: "center", fontSize: "17px", color: "#5c7893" }}>
                                        {v.text}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>

                </Container>
            </Box>

            <Box sx={{ p: "7em 0" }}>
                <Container>

                    <Grid container spacing={0}>
                        <Grid item lg={6} md={6} sm={6} xs={12} sx={{ display: "flex", alignItems: "center" }}>
                            <Box sx={{ width: "100%", }}>
                                <img src={rasm} alt="" style={{ width: "100%", }} />
                                <Box sx={{ ml: { lg: "345px", md: "285px", sm: "205px", }, width: "100%" }}>
                                    <img src={rasm1} alt="" className='rasmlar' style={{ width: "50%" }} />
                                </Box>
                            </Box>

                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <Box>
                                <Box sx={{ mb: "80px  ", mt: "60px", ml: { lg: "95px", md: "95px", sm: "95px", xs: "0" } }}>
                                    <Typography sx={{
                                        fontSize: "40px",
                                        fontFamily: "Playfair Display",
                                        textAlign: "start"
                                    }}>
                                        About Us
                                    </Typography>
                                    <Box sx={{ display: "flex", justifyContent: "start" }}>
                                        <Typography sx={{ width: "100px", height: "1px", background: "#000", }}></Typography>
                                    </Box>
                                    <Typography sx={{
                                        color: "rgba(0, 0, 0, 0.5)",
                                        lineHeight: "1.7",
                                        mt: "50px",
                                        fontSize: "16px"
                                    }}>

                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nobis magni eaque velit eum, id rem eveniet dolor possimus voluptas..
                                    </Typography>


                                    <a style={{ cursor: "pointer", color: "red", display: "flex", alignItems: "center", margin: "25px 0 0 0 " }}>WATCH VIDEO  <HiArrowSmRight /></a>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

            </Box>
            <Box>
                <Container>
                    <Box sx={{ mb: "80px  ", mt: "60px" }}>
                        <Typography sx={{
                            fontSize: "40px",
                            fontFamily: "Playfair Display",
                            textAlign: "center"
                        }}>
                            Hotel Features
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography sx={{ width: "100px", height: "1px", background: "#000", }}></Typography>
                        </Box>
                    </Box>

                    <Box sx={{ p: "50px 0" }}>
                        <Grid container spacing={2}>
                            {Marga.map((v,i) => (
                                <Grid item lg={3} md={3} sm={4} xs={12} key={i}>
                                    <Box sx={{ fontSize: "80px", color: "#f23a2e", display: "flex", justifyContent: "center" }}>
                                        <img src={v.icon} alt="" style={{ width: "90px" }} />
                                    </Box>
                                    <Typography sx={{ textAlign: "center", color: "#000", fontSize: "20px", mt: "15px" }}>
                                        {v.text}
                                    </Typography>
                                </Grid>

                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Box sx={{ p: "80px 0" }}>
                <Box className='bagg' sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Container >
                        <Grid container spacing={2} sx={{ p: "50px 0" }}>
                            <Grid item lg={6} md={6} sm={6} xs={12}>
                                <Box>
                                    <Typography sx={{ color: "white", fontSize: "2rem", letterSpacing: "5px" }}>
                                        Summer Promo 50% Off
                                    </Typography>
                                    <Typography sx={{ width: "130px", height: "45px", color: "white", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid #eec60a", fontSize: "16px", "&:hover": { background: "#eec60a", borderColor: "#eec60a" }, cursor: "pointer" }}>
                                        AVAIL NOW
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={12}>
                                <Box>
                                    <Typography sx={{ fontSize: "12px", letterSpacing: "3px", color: "white", fontWeight: "500" }}>
                                        THE PROMO WILL START IN
                                    </Typography>

                                    <Typography sx={{ fontSize: "40px", color: "white", mt: "10px" }}>
                                        00 <span style={{ fontSize: "16px" }}>weeks</span> 00 <span style={{ fontSize: "16px" }}>days</span> 00 <span style={{ fontSize: "16px" }}>hr</span > 00 <span style={{ fontSize: "16px" }}>min</span> 00 <span style={{ fontSize: "16px" }}>sec</span>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>

                    </Container>
                </Box>
            </Box>

            <Box>
                <Container>
                    <Box sx={{ mb: "80px  ", mt: "60px" }}>
                        <Typography sx={{
                            fontSize: "40px",
                            fontFamily: "Playfair Display",
                            textAlign: "center"
                        }}>
                            Our Gallery
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography sx={{ width: "100px", height: "1px", background: "#000", }}></Typography>
                        </Box>
                    </Box>
                    <Box sx={{ mb: "50px" }}>
                        <Grid container spacing={0}>
                            {Datta.map((v,i ) => (
                                <Grid item lg={3} md={3} sm={6} xs={12} key={i}>
                                    <img src={v.rasm} alt="" style={{ width: "100%", height: "100%" }} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Box>

            <Box>
                <Container>
                    <Box sx={{ mb: "00px  ", mt: "10px" }}>
                        <Typography sx={{
                            fontSize: "40px",
                            fontFamily: "Playfair Display",
                            textAlign: "center"
                        }}>
                            Upcoming Events
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Typography sx={{ width: "100px", height: "1px", background: "#000", }}></Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box sx={{
                p:"50px 0"
            }}>
                <Container>
                    <Carousel breakPoints={breakPoints} autoPlaySpeed={3500}>

                        {Caro.map((v,i) => (
                            <Box sx={{ width: "100%", p: "20px" }} key={i}>
                                <Typography sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                    <img src={v.rasm} alt="" style={{ width: "100%", }} />
                                </Typography>
                                <Typography sx={{ fontSize: "17px", mt: "20px" }}>                                    {v.name}                                </Typography>
                                <Typography sx={{ fontSize: "14px", color: "grey", letterSpacing: "1.2px" }}>{v.nma}   <a href="#" style={{ fontSize: "14px", color: "red", textDecoration: "none" }}> Admin</a> </Typography>
                                <Typography sx={{ mt: "30px", color: "grey" }}>
                                    {v.text}
                                </Typography>
                            </Box>
                        ))}
                    </Carousel>
                </Container>
            </Box>
            <Box sx={{
                background: "#f8f9fa",
                p:"50px 0"
            }}>
                <Box sx={{ mb: "80px  ", mt: "10px" }}>
                    <Typography sx={{
                        fontSize: "40px",
                        fontFamily: "Playfair Display",
                        textAlign: "center"
                    }}>
                        What People Say
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Typography sx={{ width: "100px", height: "1px", background: "#000", }}></Typography>
                    </Box>
                </Box>
                <Container>
                    <Carousel breakPoints={breakPoints1} autoPlaySpeed={3500}>
                        {Fara.map((v,i) => (
                            <Grid container spacing={2} key={i}>
                                <Grid item xl={3} lg={2.5} md={3} sm={2} xs={4}>
                                    <img src={v.rasm} alt="" style={{ width: "100px", height: "90px" }} />
                                </Grid>
                                <Grid item xl={8.5} lg={9} md={8.5} sm={9} xs={8}>
                                    <Box >
                                        <Typography sx={{
                                            fontSize: "20px",
                                            color: "#000"
                                        }}>
                                            {v.name}
                                        </Typography>
                                        <Typography sx={{
                                            color: "rgba(0, 0, 0, 0.5)",
                                            lineHeight: "1.7",
                                            fontSize: "1rem",
                                            fontFamily: '"Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
                                        }}>
                                            {v.text}
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        ))}
                    </Carousel>
                </Container>
            </Box>
        </Box >
    )
}

export default Home