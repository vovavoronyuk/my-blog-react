import React from 'react'
import { Button } from '@mui/material'
import '.src/components/Menu/MenuStyle.scss'
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
