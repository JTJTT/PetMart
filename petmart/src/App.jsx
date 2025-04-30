import './App.css'
import MyNav from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './components/Homepage/HomePage';

function App() {
  return (
      <>
        <div>
          <MyNav />
          <HomePage />
        </div>
      </>
  );
}

export default App