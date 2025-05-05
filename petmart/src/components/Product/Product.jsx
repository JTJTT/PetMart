import './Product.css';
import products from '../../Products.json';
import { useNavigate } from 'react-router-dom';

function Product() {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    navigate('/cart', {
      state: {
        product,
      },
    });
  };

  return (
    <div className="Product">
      <header className="ProductHeader">
        <h1>Products</h1>
      </header>
      <div className="ProductList">
        {products.map((product) => (
          <div key={product.item_id} className="ProductBox">
            <h2>{product.name}</h2>
            <p>Animal Preference: {product.animal_preference}</p>
            <p>Quantity: {product.quantityPerItem}</p>
            <p><strong>Price: {product.price}</strong></p>
            <button 
            className="AddToCartButton"
            onClick={() => handleAddToCart(product)}>
            Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;