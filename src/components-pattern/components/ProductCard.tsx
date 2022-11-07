import styles from  '../styles/styles.module.css'
import  {useProduct}  from '../hooks/useProduct'
import { createContext, ReactElement } from 'react';
import { ProductContextProps, Product, OnChangeArgs } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export interface Props {
    children?: ReactElement | ReactElement[];
    className?: string
    product: Product;
    style?: React.CSSProperties;
    onChange?: ( args: OnChangeArgs ) => void;
    value?: number
}

export const ProductCard = ({ product, children, className, style, onChange, value } : Props ) => {

    const { increaseBy, counter, }  = useProduct({ onChange, product, value });

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
        }}>
            <div 
                className={ `${styles.productCard} ${ className }` }
                style= { style }
            >

                { children }
                {/* <ProductImage img={ product.img } />
                <ProductTitle title={ product.title } /> 
                <ProductButtons increaseBy={ increaseBy } counter={ counter } />  */}
                {/* <span className={ styles.productDescription }>{ product.title }</span> */}
                
            </div>
        </Provider>    
    )
}


