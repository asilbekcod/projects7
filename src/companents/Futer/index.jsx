import * as React from 'react';
import { Box, Grid, Typography } from "@mui/material"
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaVimeoV,FaHeart } from 'react-icons/fa';
import "./style.css"

function Footer() {
    return (
        <>
            <Box sx={{ paddingTop: "80px", paddingBottom: "50px", background: "#333333" }}>
                <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                    <Grid item xs={11} lg={9.8} md={11} sm={11} xl={7.3}>
                        <Box>
                            <Grid container spacing={6} sx={{marginBottom:"100px"}}>
                                <Grid item xs={11} lg={4} md={4} sm={4} xl={4}>
                                    <Typography variant='h3' sx={{ fontSize: "20px", color: "#fff", marginBottom: "1.5rem", lineHeight: "1.7" }}>
                                        About
                                    </Typography>
                                    <Typography sx={{ color: "rgba(255, 255, 255, 0.5)", marginBottom: "1rem", lineHeight: "1.7" }}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quos rem ullam, placeat amet.
                                    </Typography>
                                    <Typography sx={{ marginBottom: "1rem" }}>
                                        <Link className='foli' style={{
                                            cursor: "pointer",
                                            borderRadius: "30px",
                                            paddingLeft: "1.5rem",
                                            paddingRight: "1.5rem",
                                            backgroundColor: "#f23a2e",
                                            borderColor: "#f23a2e",
                                            padding: "0.375rem 0.75rem",
                                            color: "#fff",
                                            textDecoration: "none",
                                        }}>
                                            Read More
                                        </Link>
                                    </Typography>
                                </Grid>
                                <Grid item xs={11} lg={3} md={3} sm={3} xl={3}>
                                    <Typography variant='h3' sx={{ fontSize: "20px", color: "#fff", marginBottom: "1.5rem", lineHeight: "1.7" }}>
                                        Quick Menu
                                    </Typography>
                                    <Typography sx={{ color: "rgba(255, 255, 255, 0.5)", marginBottom: "1rem", "&:hover": { color: "#fff" }, lineHeight: "1.7" }}>
                                        About
                                    </Typography>
                                    <Typography sx={{ color: "rgba(255, 255, 255, 0.5)", marginBottom: "1rem", "&:hover": { color: "#fff" }, lineHeight: "1.7" }}>
                                        Services
                                    </Typography>
                                    <Typography sx={{ color: "rgba(255, 255, 255, 0.5)", marginBottom: "1rem", "&:hover": { color: "#fff" }, lineHeight: "1.7" }}>
                                        Approach
                                    </Typography>
                                    <Typography sx={{ color: "rgba(255, 255, 255, 0.5)", marginBottom: "1rem", "&:hover": { color: "#fff" }, lineHeight: "1.7" }}>
                                        Sustainability
                                    </Typography>
                                    <Typography sx={{ color: "rgba(255, 255, 255, 0.5)", marginBottom: "1rem", "&:hover": { color: "#fff" }, lineHeight: "1.7" }}>
                                        News
                                    </Typography>
                                    <Typography sx={{ color: "rgba(255, 255, 255, 0.5)", marginBottom: "1rem", "&:hover": { color: "#fff" }, lineHeight: "1.7" }}>
                                        Careers
                                    </Typography>
                                </Grid>
                                <Grid item xs={11} lg={3} md={3} sm={3} xl={3}>
                                    <Typography variant='h3' sx={{ fontSize: "20px", color: "#fff", marginBottom: "1.5rem", lineHeight: "1.7" }}>
                                        Ministries
                                    </Typography>
                                    <Typography sx={{ color: "rgba(255, 255, 255, 0.5)", marginBottom: "1rem", "&:hover": { color: "#fff" }, lineHeight: "1.7" }}>
                                        Children
                                    </Typography>
                                    <Typography sx={{ color: "rgba(255, 255, 255, 0.5)", marginBottom: "1rem", "&:hover": { color: "#fff" }, lineHeight: "1.7" }}>
                                        Women
                                    </Typography>
                                    <Typography sx={{ color: "rgba(255, 255, 255, 0.5)", marginBottom: "1rem", "&:hover": { color: "#fff" }, lineHeight: "1.7" }}>
                                        Bible Study
                                    </Typography>
                                    <Typography sx={{ color: "rgba(255, 255, 255, 0.5)", marginBottom: "1rem", "&:hover": { color: "#fff" }, lineHeight: "1.7" }}>
                                        Church
                                    </Typography>
                                    <Typography sx={{ color: "rgba(255, 255, 255, 0.5)", marginBottom: "1rem", "&:hover": { color: "#fff" }, lineHeight: "1.7" }}>
                                        Missionaries
                                    </Typography>
                                </Grid>
                                <Grid item xs={11} lg={2} md={2} sm={2} xl={2}>
                                    <Typography variant='h3' sx={{ fontSize: "20px", color: "#fff", marginBottom: "1.5rem", lineHeight: "1.7" }}>
                                        Social Icons
                                    </Typography>
                                    <Grid container spacing={2} >
                                        <Grid item xs={1} lg={3} md={3} sm={3} xl={3}>
                                            <Typography>
                                                <Link hrefLang='#' className='fai'>
                                                    <FaFacebookF />
                                                </Link>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={1} lg={3} md={3} sm={3} xl={3}>
                                            <Typography>
                                                <Link hrefLang='#' className='fai'>
                                                    <FaTwitter />
                                                </Link>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={1} lg={3} md={3} sm={3} xl={3}>
                                            <Typography>
                                                <Link hrefLang='#' className='fai'>
                                                    <FaInstagram />
                                                </Link>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={1} lg={3} md={3} sm={3} xl={3}>
                                            <Typography>
                                                <Link hrefLang='#' className='fai'>
                                                    <FaVimeoV />
                                                </Link>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container >
                                <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                                    <Typography sx={{ color: "rgba(255, 255, 255, 0.5)" ,textAlign:"center"}}>
                                            Copyright © 2023 All Rights Reserved | This template is made with <i style={{color:"red"}}><FaHeart/></i> by Colorlib
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default Footer