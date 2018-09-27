import React from 'react';
import FontAwesome from 'react-fontawesome';

import '../css/sideNav.css';
import { Link } from 'react-router-dom';


const SideNavItems = () => {

    const items = [
        {
            type: 'options',
            icon: 'home',
            text: 'Home',
            link: '/'
        },
        {
            type: 'options',
            icon: 'file-text-o',
            text: 'News',
            link: '/news'
        },
        {
            type: 'options',
            icon: 'play',
            text: 'Videos',
            link: '/videos'
        },
        {
            type: 'options',
            icon: 'sign-in',
            text: 'Sign in',
            link: '/sign-in'
        },
        {
            type: 'options',
            icon: 'sign-out',
            text: 'Sign out',
            link: '/sign-out'
        }
    ]
    const showItems = () => {
        return items.map( (item,i) => {
            return (
                <div key={i} className={item.type}>
                    <Link to={item.link}>
                        <FontAwesome name={item.icon} /> {item.text} </Link>
                </div>
            )

        } )
  
    }
        
    return (
        <div>
            {showItems()}
        </div>
    );
}

export default SideNavItems;
