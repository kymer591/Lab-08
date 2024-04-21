import { useState } from "react";

export const Button = props => {
    const{text} = props;

    const[count, setCount]= useState(5);

    function handlerButton(){
        setCount(count+50);
    }

    return(
        <button onClick={ handlerButton }>
            {text} {count}
        </button>
    )
};