import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Box, Typography } from "@mui/material";
import "../style.css"
function Carousell() {
  return (
    <Box>
         <Carousel fade>
                <Carousel.Item>
                    <Box id='CONTACTBoshsurat1'>
                        <Box sx={{
                            background: 'rgba(0, 0, 0, 0.4)',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center'
                        }}>
                            <Box>
                                <Typography id='CONTACTBoshsurat31' sx={{ maxWidth: { lg: "500px", md: "500px", sm: "500px", xs: "300px" }, fontWeight: "500", fontSize: { lg: "64px", md: "64px", sm: "64px", xs: "50px" } }}>
                                    Welcome to Suites
                                </Typography>
                                <Typography id='CONTACTBoshsurat2' >
                                    HOTEL & RESORT
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                </Carousel.Item>
                <Carousel.Item>
                    <Box id='EVENTSBoshsurat91'>
                        <Box sx={{
                            background: 'rgba(0, 0, 0, 0.4)',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center'
                        }}>
                            <Box>
                                <Typography id='CONTACTBoshsurat31' sx={{ maxWidth: { lg: "500px", md: "500px", sm: "500px", xs: "300px" }, fontWeight: "500", fontSize: { lg: "64px", md: "64px", sm: "64px", xs: "50px" } }}>
                                   Unique Experence 
                                </Typography>
                                <Typography id='CONTACTBoshsurat2' >
                                    Enjoy with us
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                </Carousel.Item>
                <Carousel.Item>
                    <Box id='EVENTSBoshsurat81'>
                        <Box sx={{
                            background: 'rgba(0, 0, 0, 0.4)',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center'
                        }}>
                            <Box>
                                <Typography id='CONTACTBoshsurat31' sx={{ maxWidth: { lg: "500px", md: "500px", sm: "500px", xs: "300px" }, fontWeight: "500", fontSize: { lg: "64px", md: "64px", sm: "64px", xs: "50px" } }}>
                                   Relaxing Rooms   
                                </Typography>
                                <Typography id='CONTACTBoshsurat2' >
                                    YOUR ROOM YOUR STAY
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                </Carousel.Item>
               

            </Carousel>
    </Box>
  )
}

export default Carousell