import React, { useEffect, useState } from 'react'
import DetailsCart from './DetailsCart';
import EmptyCart from './EmptyCart';
import { getItemsFromLocalStorage } from './cartlocal';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
       const savedItems = getItemsFromLocalStorage("cartItem", []);
       setCartItems(savedItems);
     }, []);

  return (
    <>
    {
        cartItems && cartItems.length>0?<DetailsCart/>:<EmptyCart/>
    }
    
    
    </>
  )
}

export default Cart