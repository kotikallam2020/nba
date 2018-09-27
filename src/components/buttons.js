import React from 'react'
import { Link } from 'react-router-dom';
import '../css/sideNav.css';


const buttons = (props) => {
    let template = null;
    switch(props.type){
        case 'loadmore':
        template  = (
            <div 
                className="blue-btn"
                onClick={props.loadMore}>
                {props.cta}
            </div>
        )
        break;
        case 'linkTo':
        template = (
            <Link 
                to={props.linkTo} 
                className= "blue-btn" >
                { props.cta }
            </Link>
        )
        break;

        default:
        template = null;
    }
    return template;
}

export default buttons;