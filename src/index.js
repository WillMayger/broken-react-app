import React from 'react';
import ReactDOM from 'react-dom';
import { StyleRoot } from 'radium';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/routes/Routes';

const initStyles = `
    body {
      margin: 0 auto;
      width: 100%;
      height: 100vh;
      display: block;
      color: #fff;
      background: #333;
    }

    #root {
      height: 100%;
      width: 100%;
    }
`;

function componentToRender() { return (
  <div>
    <style>{initStyles}</style>
  </div>
  <div>
    <StyleRoot>
      <BrowserRouter>
        <Routes />
      </ BrowserRouter>
    </StyleRoot>
  </div>
); }

React.render(
  componentToRender,
);