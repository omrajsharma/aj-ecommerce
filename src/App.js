import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Offers from './components/Offer/Offers';


function App() {
  return (
    <div>
      <Navigation/>
      <Header/>
      <Offers/>
    </div>
  );
}

export default App;
