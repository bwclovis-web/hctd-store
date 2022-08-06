import { useState, useEffect } from 'react';

const UseCart = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const toggleCart = () => {
        setCartOpen(!cartOpen)
    };

    useEffect(() => {
        const root = document.documentElement;
        if(cartOpen) {
            const trigger = document.getElementById('cart-close')
            trigger?.focus()
            root.classList.add('overflow-hidden')
        } else {
            root.classList.remove('overflow-hidden')
        }
    }, [cartOpen]);

    return [cartOpen, toggleCart]
}

export default UseCart;