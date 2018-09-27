import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/sideNav.css';

import  FontAwesome  from 'react-fontawesome';

class SideNavItems extends Component {
    render () {
        return (
            <div className="sidenav-items-wrapper">
                <div>
                    <FontAwesome name="arrow-right" />&nbsp;
                    <Link to ="/sign-in">Sign In</Link></div>
                <div>
                    <FontAwesome name="bell-o" />&nbsp;
                    <Link to ="/videos">Videos</Link> 
                </div>
                <div>
                    <FontAwesome name="briefcase" />&nbsp;
                    <Link to ="/articles">Articles</Link>
                </div>
                <div>
                    <FontAwesome name="book" />&nbsp;
                    <Link to ="/news">News</Link>
                </div>
                
                <div>
                    <FontAwesome name="arrow-left" />&nbsp;
                    <Link to ="/sign-out">Signout</Link>
                </div>
            </div>
        )
    }
}

export default SideNavItems;