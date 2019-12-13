import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export class Contrada extends Component {
    state = {
        contrada: {},
        isLoaded: false
    }
    componentDidMount() {
        axios.get(`/wordpress/wp-json/wp/v2/contrade/${this.props.match.params.id}`)
            .then(res => this.setState({
                contrada: res.data,
                isLoaded: true
            }))
    }
    render() {
        const { contrada, isLoaded } = this.state
        console.log('ciadddssddo')
        if (isLoaded) {
            return (
                <Fragment>
                    <Link to='/'>Go Back</Link>
                    <hr />
                    <h1>{contrada.title.rendered}</h1>
                    <div dangerouslySetInnerHTML={{ __html: contrada.content.rendered }}>

                    </div>
                    <h4>Priore: {contrada.acf.priore}</h4>


                </Fragment>
            )

        }
        return null

    }
}

export default Contrada
