import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

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
        console.log(this.state)
        if (isLoaded) {
            return (
                <nav>
                    <ul className="nav-links">
                        <Link to={'/'}>
                            <h3>Bplanner</h3>
                        </Link>
                        {menu.map(ele => (
                            <Link to={ele.title}>
                                <li>{ele.title}</li>

                            </Link>

                        ))}


                    </ul>

                </nav>
            )


        }
        return null



    }

}
export default Nav
