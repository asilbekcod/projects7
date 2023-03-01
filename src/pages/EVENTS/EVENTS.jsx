import './EVENTS.css';
import { Box, Grid, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { EVENTSmap } from '../../assets/EVENTS/EVENTS';


function EVENTS() {
    return (
        <Box id='EVENTS'>
            <Box id='EVENTSBoshsurat1'>
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
                        <Typography id='EVENTSBoshsurat2'>
                        READ OUR
                        </Typography>
                        <Typography id='EVENTSBoshsurat3'>
                        Blogs & Events
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box id='EVENTSBoshsurat4'>
                    <Box>
                        <Container>
                            <Box>
                                <Grid container>
                                    {EVENTSmap.map((val) => (
                                        <Grid item xs={12} sm={6} md={4} lg={4} xl={4} id='EVENTSBoshsurat13'>
                                            <Box id='EVENTSBoshsurat7'>
                                                <Link href="#" id='EVENTSBoshsurat8'>
                                                    <img src={val.img} alt="" id='EVENTSBoshsurat9' />
                                                </Link>
                                                <Box id='EVENTSBoshsurat10'>
                                                    <Link href='#' id='EVENTSBoshsurat11'>
                                                        {val.yoz1}
                                                    </Link>
                                                    <Typography id='EVENTSBoshsurat14'>
                                                    Dec 20th, 2018 • By <Link href='#' id='EVENTSBoshsurat15'>
                                                        Admin
                                                        </Link>
                                                    </Typography>
                                                    <Link id='EVENTSBoshsurat12'>
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
export default EVENTS;