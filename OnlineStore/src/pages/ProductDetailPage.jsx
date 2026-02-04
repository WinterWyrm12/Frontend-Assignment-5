import {useParams} from 'react-router-dom';
import ProductCard from '../components/ProductCard';


function ProductDetailPage({products, addToCart}) {
    const {id}=useParams();
    const product=products.find(p=>p.id===parseInt(id));
    if (!product) {
        return (
            <main className="main-content">
                <h2>Product Not Found</h2>
                <p>The post you're looking for doesn't exist.</p>
            </main>
        );
    }

    return (
        <main className="main-content">
            <ProductCard 
                key={product.id}
                product={product}
                addToCart={addToCart}
            />
        </main>
    );
}

export default ProductDetailPage;