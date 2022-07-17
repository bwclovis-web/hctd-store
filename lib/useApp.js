import { useState, useEffect } from 'react';

const UseCart = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const toggleCart = () => {
        setCartOpen(!cartOpen)
    };

    useEffect(() => {
        const root = document.documentElement;
        if(cartOpen) {
            root.classList.add('cart-open')
        } else {
            root.classList.remove('cart-open')
        }
    }, [cartOpen]);

    return [cartOpen, toggleCart]
}

export default UseCart;