import CartItem from "../components/CartItem";
import './CartPage.css';

function CartPage({ products, removeProduct }) {
  // calculate total here since it's not passed
  const total = products.reduce((sum, product) => sum + product.price, 0);

  return (
    <>
      <h2>Your Cart:</h2>
      <div className="cart-items">
        {/* conditional for empty cart */}
        {products.length === 0 ? (
          <p className="empty-text">Your cart is empty.</p>
        ) : (
          <>
            {products.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                onDeleteProduct={removeProduct}
              />
            ))}
            {/* Total with decimals */}
            <p className="total-text">Total: ${total.toFixed(2)}</p>
          </>
        )}
      </div>
    </>
  );
}

export default CartPage;