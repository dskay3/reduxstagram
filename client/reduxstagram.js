// import react
import React from 'react';

// import render from react-dom package
import { render } from 'react-dom';

// import stylus css
import css from './styles/style.styl';

// import components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// import provider from react-redux (bindings to connect react and redux)
import { Provider } from 'react-redux';
import store, { history } from './store';

// route component
const router = (
  <Provider store={store}>
    <Router history={history}>

      {/* Homepage */}
      <Route path="/" component={App}>

        {/* pass Index route for the main component if route is / */}
        <IndexRoute component={PhotoGrid}></IndexRoute>

        {/* pass Single route for the main component if component is /view/:postId */}
        <Route path="/view/:postId" component={Single}></Route>

      </Route>

    </Router>
  </Provider>
);

// render
render(router, document.getElementById('root'));