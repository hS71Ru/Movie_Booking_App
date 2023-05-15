import React from 'react'
import {AppBar,Box, Toolbar} from '@mui/material'
import TheaterComedySharpIcon from '@mui/icons-material/TheaterComedySharp';

const Header=()=>{
    return (
    <AppBar>
        <Toolbar>
            <Box width={'20%'}>
            <TheaterComedySharpIcon />
            </Box>
        </Toolbar>
        
    </AppBar>
    )

}


export default Header