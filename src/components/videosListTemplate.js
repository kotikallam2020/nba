import React from 'react'
import '../css/sideNav.css';
import { Link } from 'react-router-dom';
import CardInfo from './cardInfo';

const VideosTemplate = (props) => {
    return props.data.map( (item,i)=> (
         <Link to={`/videos/${item.id}`} key={i} >
            <div className="video-list-item-wrapper">
                <div className="left">
                    <div style={{ background: `url(/images/videos/${item.image})` }}></div>
                </div>
                <div className="right"> 
                <CardInfo  teams={props.teams} team={item.team} date={item.date} />
                    <h2>{item.title}</h2>
                </div>
            </div>
        </Link>
    ))
}

export default VideosTemplate;