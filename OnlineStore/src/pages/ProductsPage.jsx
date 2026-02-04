import ProductCard from "../components/ProductCard";
import './ProductsPage.css';

function ProductsPage ({products, addToCart}) {

    return (
        <>
            <h2>Products</h2>
            {products.map((product)=> (
                <ProductCard
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                />
            ))}
        </>
    );
}

export default ProductsPage;