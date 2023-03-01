import { Box, Container, Grid, Link, Typography } from '@mui/material';
import './CONTACT.css';

function CONTACT() {
    return (
        <Box id='CONTACT'>
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
                        <Typography id='CONTACTBoshsurat2'>
                            CHAT WITH US
                        </Typography>
                        <Typography id='CONTACTBoshsurat3'>
                            Get In Touch
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Container>
                    <Box sx={{ padding: '64px 0' }}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={8} lg={8} xl={8} sx={{ padding: '0 15px' }}>
                                <Box sx={{ padding: '48px' }}>
                                    <Box>
                                        <Box sx={{ marginBottom: '16px' }}>
                                            <Typography id='CONTACTInput1'>
                                                Full Name
                                            </Typography>
                                            <input type="text" id='CONTACTInput2' placeholder="Full Name" />
                                        </Box>
                                        <Box sx={{ marginBottom: '16px' }}>
                                            <Typography id='CONTACTInput1'>
                                                Email
                                            </Typography>
                                            <input type="text" id='CONTACTInput2' placeholder="Email Address" />
                                        </Box>
                                        <Box sx={{ marginBottom: '16px' }}>
                                            <Typography id='CONTACTInput1'>
                                                Phone
                                            </Typography>
                                            <input type="text" id='CONTACTInput2' placeholder="Phone #" />
                                        </Box>
                                        <Box sx={{ marginBottom: '19px' }}>
                                            <Typography id='CONTACTInput1'>
                                                Message
                                            </Typography>
                                            <textarea id='CONTACTInput3' placeholder="Say hello to us" rows={5} />
                                        </Box>
                                        <Link id='CONTACTInput4'>
                                            Send Message
                                        </Link>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{ padding: '0 15px' }}>
                                <Box sx={{ padding: '24px' }}>
                                    <Box>
                                        <Typography id='CONTACTInput5'>
                                            Contact Info
                                        </Typography>
                                        <Typography id='CONTACTInput6'>
                                            Address
                                        </Typography>
                                        <Typography id='CONTACTInput7'>
                                            203 Fake St. Mountain View, San Francisco, California, USA
                                        </Typography>
                                        <Typography id='CONTACTInput6'>
                                            Phone
                                        </Typography>
                                        <Link href='#' id='CONTACTInput9'>
                                            +1 232 3235 324
                                        </Link>
                                        <Typography id='CONTACTInput6' sx={{marginTop:'24px'}}>
                                            Email Address
                                        </Typography>
                                        <Link href='#' id='CONTACTInput11'>
                                            youremail@domain.com
                                        </Link>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}
export default CONTACT;