import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Pages/Main';
import Cart from './Pages/Cart';
import Header from './Components/Header/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Main} />
      <Route path="/cart" component={Cart} />
    </BrowserRouter>
  );
};

export default App;
