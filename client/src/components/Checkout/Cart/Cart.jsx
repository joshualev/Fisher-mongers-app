import { Link } from 'react-router-dom'
import React from 'react'
import Button from '@mui/material/Button'
const Cart = ( { fishList }) => {
  return (
    <>
        <div>Cart</div>
        <Link to='/checkout'>
            <Button>Checkout</Button>
        </Link>
    </>
    )
}

export default Cart