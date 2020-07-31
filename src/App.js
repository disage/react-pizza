import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Pages/Main';
import Header from './Components/Header/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main />
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
