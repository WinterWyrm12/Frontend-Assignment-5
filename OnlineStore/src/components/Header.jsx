import './Header.css';
import { Link } from 'react-router-dom';

function Header({cartCount}) {


  return (
    <header className="app-header">
        <h1 className="logo">OnlineStore</h1>
        <nav className="nav-menu">
          <Link to='/' className="nav-link">Home</Link>
          <Link to='/products' className="nav-link">Products</Link>
          <Link to='/cart' className="nav-link">Cart</Link>
          <div className="cart">
            <span className="cart-count">🛒 {cartCount}</span>
          </div>
        </nav>
    </header>
  );
}

export default Header;