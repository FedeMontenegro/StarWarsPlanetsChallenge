//Importando estilos
import './App.css';
//-----------------------------------------------------------------------
//Importando componentes de React
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//-----------------------------------------------------------------------
//Importando componentes
import Header from './Components/Header';
import Pagination from './Components/Pagination';
import NotFound from './Components/NotFound.jsx';
import Result from "./Components/Results.jsx";
import Favorites from "./Components/Favorites.jsx";
//-----------------------------------------------------------------------
//Importando componentes de Redux
import { Provider } from 'react-redux';
import store from "./store";

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>

        <div className="app-container">
          <Routes>
            <Route exact path="/" element={
              <React.Fragment>
                <Header />
                <Pagination />
              </ React.Fragment>
            } />
            <Route exact path="/favorites" element={
              <React.Fragment>
                <Header />
                <Favorites />
              </React.Fragment>
            } />
            <Route exact path="/search/:results" element={
              <React.Fragment>
                <Header />
                <Result />
              </React.Fragment>
            } />
            <Route path="*" element={
              <React.Fragment>
                <Header />
                <NotFound />
              </React.Fragment>
            } />
          </Routes>
        </div>

      </BrowserRouter>

    </Provider>
  );
}

export default App;
