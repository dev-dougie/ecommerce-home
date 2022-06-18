import React  from 'react'
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

const AddToCartContext = React.createContext({});

export const AddToCartProvider = ({ children }) => {

    const [prodQty, setProdQty] = useState(Number(Cookies.get('itens')) || 0);

    useEffect(() => {
        Cookies.set('itens', Number(prodQty))
    }, [prodQty]);

    const incrementItens = () => {
        setProdQty(prodQty + 1);
    }

    return (
        <AddToCartContext.Provider value={{ prodQty, incrementItens }}>
            {children}
        </AddToCartContext.Provider>
    )
}

export const useCart = () => {
    return React.useContext(AddToCartContext);
}
