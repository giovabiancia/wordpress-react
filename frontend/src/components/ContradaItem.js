import React, { Component } from 'react';
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class ContradaItem extends Component {
    state = {
        imgUrl: "",
        author: "",
        isLoaded: false

    }
    static propTypes = {
        contrada: PropTypes.object.isRequired
    }
    componentDidMount() {
        const { featured_media, author } = this.props.contrada

        const getImageUrl = axios.get(`/wordpress/wp-json/wp/v2/media/${featured_media}`)
        const getAuthor = axios.get(`/wordpress/wp-json/wp/v2/users/${author}`)
        Promise.all([getImageUrl, getAuthor]).then(res => {

            this.setState({
                imgUrl: res[0].data.media_details.sizes.full.source_url,
                author: res[1].data.name,
                isLoaded: true

            })

        });
    }
    render() {
        const { id, title, excerpt } = this.props.contrada
        const { imgUrl, author, isLoaded } = this.state
        if (isLoaded) {
            return (
                <div>
                    <h2>{title.rendered}</h2>7
                    <small>Scritto da <b>{author}</b></small>
                    <img src={imgUrl} style={{ width: '10%' }} alt={title.rendered}></img>
                    <Link to={`/contrada/${id}`}>Leggi Review</Link>
                    <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
                </div>
            )

        }
        return null

    }
}

export default ContradaItem
