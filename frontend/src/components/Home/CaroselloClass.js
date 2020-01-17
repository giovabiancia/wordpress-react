import React, { Component } from 'react'
import axios from 'axios'

export class CaroselloClass extends Component {
    componentDidMount() {
        axios.get(`/wordpress/wp-json/wp/v2/pages/15`)
            .then(res => {
                console.log(res)
            })

    }
    render() {
        return (
            <div>
                <h3>Questo è una get inline</h3>

            </div>
        )
    }
}

export default CaroselloClass
