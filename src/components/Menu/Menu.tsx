import React from 'react'
import { Button } from '@mui/material'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">News</Button>
            <Button color="inherit">Contact</Button>
            <Button color="inherit">Cart</Button>
        </>
    )
}

export default Menu
