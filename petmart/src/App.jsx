import './App.css'
import Header from './components/header/header.jsx'
import Product from './Product/Product.jsx';

function App() {
  return (
    <body>
      <div className="App">
        <Header />
      </div>
      <div className="Product">
        <Product />
      </div>
    </body>
  );
}

export default App