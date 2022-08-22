import { useState } from "react";

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            //Manten el estado
            ...state,
            //Manten lo que haya y agrega lo que te voy a pasar
            cart: [...state.cart, payload]
        });
    };

    return {
        state,
        addToCart
    }
}

export default useInitialState;