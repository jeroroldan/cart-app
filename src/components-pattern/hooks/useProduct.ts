import { useEffect, useRef, useState } from 'react';
import { Product, OnChangeArgs } from '../interfaces/interfaces';


interface useProductArg {
    product: Product,
    onChange?: ( args: OnChangeArgs ) => void;
    value?: number;
}

export const useProduct = ( { onChange,product, value = 0 } : useProductArg ) => {

    const isControlled = useRef( !!onChange );

    const [ counter, setCounter ] = useState(value);

    const increaseBy = ( value: number ) => {

        if(isControlled.current){
            return onChange!({ count: value , product })
        }

        const newValue =  Math.max( counter + value, 0 );
        setCounter( newValue );

        onChange && onChange({ count: newValue, product });
    }

    useEffect(() => {
        setCounter(value)
    }, [value])
    

    return {
        increaseBy,
        counter,
    }

}