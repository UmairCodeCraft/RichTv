// import logo from './logo.svg';
import './App.css';
import Component_A from './components/Ques/Component_A';
import Use_button from './components/Ques/Use_button';
import Question from './components/Ques/question';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Header from './components/Router/Header';
import './components/Router/index1.css';
import Contact from './components/Router/Pages/Contact';
import Home from './components/Router/Pages/Home';
import About from './components/Router/Pages/About';
import Services from './components/Router/Pages/Services';
import Error from './components/Router/Pages/Error';
import Footer from './components/Router/Footer';
import Product from './components/Router/Pages/Product';
import Use_terms from './components/Router/Pages/Use_terms';
import Privacy from './components/Router/Pages/Privacy';
import Watchlist from './components/Router/Pages/Watchlist';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <BrowserRouter>
     {/* <Question/>
      <Component_A/>
      <Use_button/> */}
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='About' element={<About/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='Services' element={<Services/>}/>
        <Route path='Product' element={<Product/>}/>
        <Route path='Use_terms' element={<Use_terms/>}/>
        <Route path='Privacy' element={<Privacy/>}/>
        <Route path='Watchlist' element={<Watchlist/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
  </BrowserRouter>
    </>
  );
}

export default App;
