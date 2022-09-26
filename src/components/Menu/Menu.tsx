import React from 'react'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

type Props = {}

const style = {
    fontSize: 18,
    fontWeight: 700,
}

const Menu = (props: Props) => {
    return (
        <>
            <Button sx={style} color="inherit">
                <NavLink
                    to="/"
                    style={{
                        textDecoration: 'none',
                        color: 'black',
                    }}
                >
                    Home
                </NavLink>
            </Button>
            <Button sx={style} color="inherit">
                <NavLink
                    to="/about"
                    style={{
                        textDecoration: 'none',
                        color: 'black',
                    }}
                >
                    About
                </NavLink>
            </Button>
            <Button sx={style} color="inherit">
                <NavLink
                    to="/news"
                    style={{
                        textDecoration: 'none',
                        color: 'black',
                    }}
                >
                    News
                </NavLink>
            </Button>
            <Button sx={style} color="inherit">
                <NavLink
                    to="/contact"
                    style={{
                        textDecoration: 'none',
                        color: 'black',
                        cursor: 'pointer',
                    }}
                >
                    Contact
                </NavLink>
            </Button>
            <Button sx={style} color="inherit">
                <NavLink
                    to="/cart"
                    style={{
                        textDecoration: 'none',
                        color: 'black',
                    }}
                >
                    Cart
                </NavLink>
            </Button>
        </>
    )
}

export default Menu
