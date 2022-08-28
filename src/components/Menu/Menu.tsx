import React from 'react'
import { Button } from '@mui/material'

type Props = {}

const style = {
    fontSize: 18,
    fontWeight: 700,
}

const Menu = (props: Props) => {
    return (
        <>
            <Button sx={style} color="inherit">
                Home
            </Button>
            <Button sx={style} color="inherit">
                About
            </Button>
            <Button sx={style} color="inherit">
                News
            </Button>
            <Button sx={style} color="inherit">
                Contact
            </Button>
            <Button sx={style} color="inherit">
                Cart
            </Button>
        </>
    )
}

export default Menu
