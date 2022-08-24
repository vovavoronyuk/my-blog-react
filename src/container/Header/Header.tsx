import React from 'react'
import { Container, AppBar, Toolbar, Typography } from '@mui/material'
import Menu from '../../components/Menu/Menu'
import CartHeader from 'components/CartHeader/CartHeader'

type Props = {}

const Header = (props: Props) => {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        A creative agency based in Helsinki.
                    </Typography>
                    <Menu />
                    <CartHeader />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
