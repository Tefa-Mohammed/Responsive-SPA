// ===IMPORT REACT SLICK CAROUSAL=====
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ===IMPORT BOOTSTRAP=====
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/popper.js/dist/popper.min.js'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
// ===IMPORT FONTAWESOME
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
//Import Css File
import './App.css';
//========Import Components======
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Book from './components/book/Book';
import Packages from './components/packages/Packages';
import Services from './components/services/Services';
import Gallery from './components/gallery/Gallery';
import Review from './components/review/Review';
import Contact from './components/contact/Contact';
import PageNotFound from './components/pageNotFound/PageNotFound';
import Footer from "./components/footer/Footer";
import ToTop from "./components/scrollToTop/ToTop";

import { Redirect, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <>

      <Navbar />
      <ToTop />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/book" component={Book} />
        <Route path="/packages" component={Packages} />
        <Route path="/services" component={Services} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/review" component={Review} />
        <Route path="/contact" component={Contact} />
        <Redirect exact from="/" to="/home" />
        <Route path="*" component={PageNotFound} /> {/*page not found*/}
      </Switch>
      <Footer />

    </>
  );
}

export default App;
