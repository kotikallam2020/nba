import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';
import FontAwesome from 'react-fontawesome';
import SideNav from './sideNav';

const Header = (props) => {

    const navBars = ()=>  (
            <div className="bars">
                <FontAwesome name="bars" 
                    onClick={props.onOpenNav}
                    style={{ 
                        color: '#dfdfdf',
                        padding: '10px',
                        cursor: 'pointer'
                    }} 
                />
            </div>
        )

    const logo = () => {
        return (
            <Link to="/" className="logo">
                <img alt="Nba logo" src="/images/nba_logo.png" />
            </Link>
        )
    }

    return (
        <header className="header-container">
           
           <SideNav {...props} />

            <div className="header-opt">
                {navBars()}
                {logo()}
            </div>
        </header>
    );
}

export default Header;
