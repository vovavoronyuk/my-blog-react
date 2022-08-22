import React from 'react'
import {
    Container,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

type Props = {}

const Header = (props: Props) => {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    A creative agency based in Helsinki.
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    ></Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
