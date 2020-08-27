import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Pages/Main';
import Cart from './Pages/Cart';
import Header from './Components/Header/Header';

const App = () => {
  const [pizzas, setPizzaz] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        setPizzaz(json.pizzas);
      });
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" render={() => <Main items={pizzas} exact />} />
      <Route path="/cart" component={Cart} />
    </BrowserRouter>
  );
};

export default App;
