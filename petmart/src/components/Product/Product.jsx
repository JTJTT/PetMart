import './Product.css';
import products from '../../Products.json';

function Product() {
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
            onClick={() => console.log(`Added ${product.name} to cart`)}
            >Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;