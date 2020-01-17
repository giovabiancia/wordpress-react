import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import logo from './logo.jpg';

export class Nav extends Component {
    state = {
        menu: [],
        isLoaded: false
    }
    componentDidMount() {

        axios.get('/wordpress/wp-json/menus/v1/menus/menu1')
            .then(res => this.setState({
                menu: res.data.items,
                isLoaded: true
            })
            )
            .catch(err => console.log(err));
    }
    render() {
        const { menu, isLoaded } = this.state;

        if (isLoaded) {
            return (
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                        <div className="container">
                            <Link to={'/'}>
                                <a className="navbar-brand" href="#">
                                    <img src="http://placehold.it/150x50?text=Logo" alt="" />

                                </a>
                            </Link>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav ml-auto">

                                    {menu.map(ele => (
                                        <Link to={ele.title}>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">{ele.title}</a>
                                            </li>


                                        </Link>

                                    ))}


                                </ul>

                            </div>
                        </div>
                    </nav>
                </header>

            )


        }
        return null



    }

}
export default Nav
