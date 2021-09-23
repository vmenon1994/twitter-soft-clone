import React from 'react' 
import { NavLink } from 'react-router-dom'

export default function Nav() {

    return (
        <nav className='nav'>
            <NavLink
              exact to="/"
              activeStyle={{
                    fontWeight: "bold",
                    color: '#FAD501'
                    }}
            >
                Home
            </NavLink>
            <NavLink
              exact to="/new"
              activeStyle={{
                    fontWeight: "bold",
                    color: '#FAD501'
                    }}
            >
                New Tweet
            </NavLink>
        </nav>
    )
}