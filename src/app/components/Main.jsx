import React from 'react';
import { Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';
import { history } from '../store/history';
import { Redirect } from 'react-router';
import { ConnectedNavigation } from './Navigation'
import { ConnectedHome } from './Home'
import { ConnectedLogin } from './Login'
import { ConnectedSignup } from './Signup'
import { ConnectedCart } from './Cart'
import { ConnectedDashboard } from './Dashboard'
import { ConnectedItemDetail } from './ItemDetail'

// Get Global Styles
import styles from '../../../public/stylesheet.css';

const RouteGuard = Component => ({ match }) =>
    !store.getState().session.authenticated ?
        <Redirect to="/" />
        :
        <Component match={match} />;

export const Main = () => (
    <Router history={history}>
        <Provider store={store}>
            <div className="container">
                <ConnectedNavigation />
                <Route exact path="/" component={ConnectedHome} />
                <Route exact path="/login" component={ConnectedLogin} />
                <Route exact path="/signup" component={ConnectedSignup} />
                <Route exact path="/cart" render={RouteGuard(ConnectedCart)} />
                <Route exact path="/dashboard" render={RouteGuard(ConnectedDashboard)} />
                <Route exact path="/item/:id" render={RouteGuard(ConnectedItemDetail)} />
            </div>
        </Provider>
    </Router>
);