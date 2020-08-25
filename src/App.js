import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Pages/Main';
import Cart from './Pages/Cart';
import Header from './Components/Header/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Main} />
      <Route path="/cart" component={Cart} />
    </BrowserRouter>
    // <BrowserRouter>
    //   <Header />
    //   <Route exact path="/" render={() => <Home clientsData={props.state.clientsData} />} />
    //   <Route path="/Music" render={() => <Music musicData={props.state.musicData} />} />
    //   <Route path="/Services" render={() => <Services servicesData={props.state.servicesData} />} />
    //   <Route path="/Contacts" component={Contacts} />
    //   <Footer />
    // </BrowserRouter>
  );
};

export default App;
