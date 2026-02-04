import './App.css';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CartItem from './components/CartItem';
import {useEffect, useState} from 'react';

// Pages
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import ProductsPage from './pages/ProductsPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductDetailPage from './pages/ProductDetailPage';
import { use } from 'react';

const defaultProducts = [
  { 
    id: 1, 
    name: "Apple", 
    price: 1.99, 
    image: "https://placehold.co/600x400",
    description: "Not the phone, but just as good."
  },
  { 
    id: 2, 
    name: "Banana", 
    price: 2.99, 
    image: "https://placehold.co/600x400",
    description: "Singular golden banana."
  },
  { 
    id: 3, 
    name: "Pineapple", 
    price: 9.99, 
    image: "https://placehold.co/600x400",
    description: "Spikey, acidic, snack."
  },
  { 
    id: 4, 
    name: "Blueberries", 
    price: 8.99, 
    image: "https://placehold.co/600x400",
    description: "3 small blueberries."
  },
  { 
    id: 5, 
    name: "Dragonfruit", 
    price: 78.99, 
    image: "https://placehold.co/600x400",
    description: "The most legendary fruit in the universe."
  },
  { 
    id: 6, 
    name: "Peach", 
    price: 1.69, 
    image: "https://placehold.co/600x400",
    description: "The sweetest peach from the heart of the Earth."
  }
]

function App() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : defaultProducts
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products)); 
  }, [products]);

  useEffect(() => {
    try {
      localStorage.setItem("products",JSON.stringify(products)); }
      catch {
        console.warn('Could not save cart to localStorage:', error);
      }
      [products]
    });

  

  //cart
  //Add to Cart
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  //Remove from Cart
  const removeProduct = (productId)=>{
    setCart(cart.filter(product=>product.id !== productId));
  };

  // Total (reduce)
  const total = cart.reduce((accumulate, item) => accumulate + item.price, 0);


  return (
    <BrowserRouter>
      <div className = 'app'>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage products={products} addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetailPage products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage products={cart} removeProduct={removeProduct} total={total} />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
