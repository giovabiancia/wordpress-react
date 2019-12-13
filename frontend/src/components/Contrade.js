import React, { Component } from 'react';
import ContradaItem from './ContradaItem';
import axios from 'axios'

export class Contrade extends Component {
    state = {
        contrade: [],
        isLoaded: false
    }
    componentDidMount() {
        // posso omettere tutto l'url grazie al proxy nel package.json
        axios.get('/wordpress/wp-json/wp/v2/contrade')
            .then(res => this.setState({
                contrade: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err));
    }
    render() {
        const { contrade, isLoaded } = this.state;
        console.log(this.state)
        if (isLoaded) {
            return (
                <div>
                    {contrade.map(contrada => (
                        <ContradaItem key={contrada.id} contrada={contrada} />
                    ))}
                </div>
            )
        }
        return null
    }
}

export default Contrade
