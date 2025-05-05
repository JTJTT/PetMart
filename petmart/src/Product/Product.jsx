import './Product.module.css'
import products from './Products.json'
// 
function Product() {
  return (
    <div className="Product">

      <header className="ProductHeader">Products</header>

      <div className="ProductList">
        {products.map((product) => (
          <div key={product.item_id} className="ProductBox">
            <h2>{product.name}</h2>
            <p>Animal Preference: {product.animal_preference}</p>
            <p>Quantity: {product.quantity}</p>
            <p><strong>Price: {product.price}</strong></p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Product

//`npm run dev`