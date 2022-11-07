import { ProductImage, ProductTitle, ProductButtons , ProductCard } from '../components';
import '../styles/custom-styles.css'
import { Product } from '../interfaces/interfaces';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';


export const ShoppingPage = () => {

    const {  onProductCountChange, shoppingCart  } = useShoppingCart()

    return (
        <div>Shopping Store
            <hr />
            <div style={{display: 'flex',flexDirection: 'row',flexWrap: 'wrap'}}>
            {
                products.map((product: Product) =>(
                    <ProductCard
                        key={ product.id } 
                        product={ product }
                        className="bg-dark text-white"
                        onChange={ onProductCountChange }
                        value= {  shoppingCart[product.id]?.count || 0 }
                    >
                        <ProductImage className ="custom-image"/> 
                        <ProductTitle className="text-white" />
                        <ProductButtons className="custom-buttons" />
                    </ProductCard >
                ))
            }
            </div>
            <div className="shopping-cart">
                {
                    Object.entries(shoppingCart).map( ([key,product]) =>(
                        <ProductCard
                            key = { key }
                            product={ product }
                            className="bg-dark text-white"
                            style = {{ width:'100px' }}
                            value = { product.count }
                            onChange={ onProductCountChange }
                        >
                            <ProductImage className ="custom-image"/> 
                            <ProductButtons 
                                className="custom-buttons" 
                                style={{
                                    display:'flex',
                                    justifyContent:'center'
                                }}
                            />
                        </ProductCard >
                    ))
                }
            </div>
        </div>
    )
}


