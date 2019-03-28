import React, { Component } from 'react'

class Navbar extends Component {
    
    render() {

        //const { isAuthenticated, user } = this.props.auth;
        const isAuthenticated = this.props.isAuthenticated;

        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">Register</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Login</a>
                </li>
            </ul>
        );

        const authLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">Account</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Logout</a>
                </li>
            </ul>
        );

        return (

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Cognipump</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Learn</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Flashcards</a>
                            </li>
                        </ul>

                        { isAuthenticated ? authLinks : guestLinks }

                        
                    </div>
                </nav>
    )
  }
}

export default Navbar;
