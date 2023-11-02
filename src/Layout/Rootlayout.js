import React from 'react'
import { Outlet} from 'react-router-dom'
import { Container } from '@mui/material';
import NavBar from '../Navigation/NavBar';
const Rootlayout = () => {
    return (
        <>
            <NavBar />
            <Container sx={{ p: 5 }}>
                <Outlet />
            </Container>
        </>
    );
}

export default Rootlayout;