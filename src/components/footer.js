import React from 'react';
import '../css/footer.css';
import { Link } from 'react-router-dom';
import {CURRENT_YEAR} from '../config';

const Footer = (props) =>  (
        <div className="footer">
            <Link to="/" className="logo">
                <img src="/images/nba_logo.png" alt="Nba logo" />
            </Link>
            <div className="right">
                 @NBA {CURRENT_YEAR} All rights reserved
            </div>
        </div>
    )


export default Footer;
