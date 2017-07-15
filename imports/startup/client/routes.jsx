import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Router, Route, browserHistory } from 'react-router';

// route components
import App from '../../ui/components/App.jsx';
import NotFound from '../../ui/components/NotFound.jsx';
import DevTools from 'mobx-react-devtools';

import { setLogEnabled, setUpdatesEnabled, setGraphEnabled } from 'mobx-react-devtools';

setLogEnabled(true); // same as configureDevtool({ logEnabled: true });
setUpdatesEnabled(true); // same as configureDevtool({ updatesEnabled: false });
setGraphEnabled(true); // same as configureDevtool({ graphEnabled: false });
// Route to home page - will render login page or redirect to dashboard overview if logged in


const renderRoutes = (state) => {
    return (
        <Router history={browserHistory}>
            <DevTools />
            <Route path="/" component={App} state={state}/>
        </Router>
    )
};

export default renderRoutes;
