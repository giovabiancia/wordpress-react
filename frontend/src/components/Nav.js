import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../css/Nav.css'
import logo from './logo.png';

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
                <div className="gx-main-header">
                    <header class="main-header">
                        <div class="row">
                            <div class="col-12">
                                <div class="gx-container">
                                    <div class="gx-toolbar menu">



                                        <a class="site-logo" >
                                            <img src={logo} alt="Bplanner" title="Bplanner" />>
                                        </a>





                                        <ul className="menu-li nav-menu">
                                            <Link to={'/'}>
                                                <h3>Bplanner</h3>
                                            </Link>
                                            {menu.map(ele => (
                                                <Link to={ele.title}>
                                                    <li className="nav-item">{ele.title}</li>

                                                </Link>

                                            ))}


                                        </ul>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                </div>
            )


        }
        return null



    }

}
export default Nav
