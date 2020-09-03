import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Main from './Pages/Main';
import Cart from './Pages/Cart';
import Header from './Components/Header/Header';
import axios from 'axios';
import { setPizzas } from './redux/actions/pizzas';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data));
    });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Main} />
      <Route path="/cart" component={Cart} />
    </BrowserRouter>
  );
};

export default App;
