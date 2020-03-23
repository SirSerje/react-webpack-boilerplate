import React from 'react';
import ReactDOM from 'react-dom';
import 'react-hot-loader/patch';
import App from './components/App';

import './normalize.scss'
import './assets/styles/style.sass';
import './assets/styles/style.css';
import { AppContainer } from 'react-hot-loader';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);


// Check if hot reloading is enable. If it is, changes won't reload the page.
// This is related to webpack-dev-server and works on development only.

// recipe from : https://gaearon.github.io/react-hot-loader/getstarted/:

/*if (module.hot) {
  // module.hot.accept();
  module.hot.accept('./components/App.jsx', () => {
    const NextRootContainer = require('./components/App').default;
    render(NextRootContainer);
  });
}*/

// recipe from : https://github.com/gaearon/react-hot-loader#appcontainer
if (module.hot) {
  // keep in mind - here you are configuring HMR to accept CHILDREN MODULE
  // while `hot` would configure HMR for the CURRENT module
  module.hot.accept('./components/App', () => {
    // if you are using harmony modules ({modules:false})
    render(App);
    // in all other cases - re-require App manually
    render(require('./components/App'));
  });
}
