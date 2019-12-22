import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <h3>Bplanner</h3>
            <ul className="nav-links">
                <Link to='/servizio'>
                    <li>Servizio</li>

                </Link>
                <Link to='contatti'>
                    <li>Contatti</li>

                </Link>
            </ul>

        </nav>
    )
}
