import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Offers from './components/Offer/Offers';
import Recommendation from './components/Recommendation/Recommendation';
import ProductList from './components/ProductList/ProductList';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Navigation/>
      <Header/>
      <Offers/>
      <Recommendation/>
      <ProductList/>
      <Footer/>
    </div>
  );
}

export default App;
