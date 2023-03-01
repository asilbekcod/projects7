import { Box, Grid, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { ROOMSmap } from "../../assets/ROOMSmap/ROOMSmap";
import { MdOutlineKeyboardArrowLeft ,MdOutlineKeyboardArrowRight } from "react-icons/md";
import './ROOMS.css'

function ROOMS() {
    return (
        <Box id='ROOMS'>
            <Box id='RoomsBoshsurat1'>
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
                        <Typography id='RoomsBoshsurat2'>
                            LUXURIOUS ROOMS
                        </Typography>
                        <Typography id='RoomsBoshsurat3'>
                            Hotel Rooms
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box id='RoomsBoshsurat4'>
                    <Box sx={{
                        textAlign: 'center',
                    }}>
                        <Typography id='RoomsBoshsurat5'>
                            Our Rooms
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography id='RoomsBoshsurat6'>
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Container>
                            <Box>
                                <Grid container>
                                    {ROOMSmap.map((val) => (
                                        <Grid item xs={12} sm={6} md={4} lg={4} xl={4} id='RoomsBoshsurat13'>
                                            <Box id='RoomsBoshsurat7'>
                                                <Link href="#" id='RoomsBoshsurat8'>
                                                    <img src={val.img} alt="" id='RoomsBoshsurat9' />
                                                </Link>
                                                <Box id='RoomsBoshsurat10'>
                                                    <Link id='RoomsBoshsurat11'>
                                                        {val.yoz1}
                                                    </Link>
                                                    <Link id='RoomsBoshsurat12'>
                                                        {val.yoz2}
                                                    </Link>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Container>
                    </Box>
                    <Box>
                        <Box id='RoomsBoshsurat14'>
                            <Link href="#" id='RoomsBoshsurat15'>
                               <MdOutlineKeyboardArrowLeft />
                            </Link>
                            <Link href="#" id='RoomsBoshsurat16'>
                               1
                            </Link>
                            <Link href="#" id='RoomsBoshsurat15'>
                               2
                            </Link>
                            <Link href="#" id='RoomsBoshsurat15'>
                               3
                            </Link>
                            <Link href="#" id='RoomsBoshsurat15'>
                               4
                            </Link>
                            <Link href="#" id='RoomsBoshsurat15'>
                               5
                            </Link>
                            <Link href="#" id='RoomsBoshsurat15'>
                               <MdOutlineKeyboardArrowRight />
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default ROOMS;