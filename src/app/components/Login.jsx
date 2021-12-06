import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as mutations from '../store/mutations';

const LoginComponent = ({ authenticateUser, authenticated }) => (
    <div className="mt-5" style={{display: 'flex', justifyContent: 'center'}}>
        <div className="card p-3 col-6">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1><i className="bi bi-person"></i>&nbsp;log in</h1>
                <Link to="signup" className='h4'>sign up<i className="bi bi-person-plus ms-2"></i></Link>
            </div>
            <form onSubmit={authenticateUser}>
                <span>username</span>
                <input type="text" placeholder="username" name="username" className="form-control mt-1 mb-1" />
                <span>password</span>
                <input type="password" placeholder="password" name="password" className="form-control mt-1 mb-4" />
                {authenticated === mutations.NOT_AUTHENTICATED ? <p>username or password is incorrect</p> : null}
                <button type="submit" disabled={authenticated === 'PROCESSING'} className="form-control mt-2 btn btn-primary">
                    <i className="bi bi-person"></i>&nbsp;log in
                </button>
            </form>
        </div>
    </div>
);

const mapStateToProps = ({ session }) => ({ authenticated: session.authenticated });

const mapDispatchToProps = (dispatch) => ({
    authenticateUser(e) {
        e.preventDefault();
        dispatch(mutations.requestAuthenticateUser(e.target['username'].value, e.target['password'].value));
    }
});

export const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);