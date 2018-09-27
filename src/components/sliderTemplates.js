import React from 'react'
import Slick from 'react-slick';
import { Link } from 'react-router-dom';
import '../css/sideNav.css';

function SliderTemplates(props) {
    let template = null;

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        spped: 500,
        slideToShow: 1,
        slidesToScroll: 1,
        ...props.settings
    }
    switch(props.type){
        case 'featured': 
            template = props.data.map((item,i)=> {
                return (
                    <div key={i}>
                        <div className="featured-item">
                            <div className="featured-image" >
                                <img src={`../images/articles/${item.image}`} alt="Article Images" />
                            </div>
                            <Link to={item.id}>
                            <div className="featured-title">{item.title}</div></Link>
                        </div>
                    </div>
                )
            })
        break;
        default: 
        template= null;

    }
    return (
        <Slick {...settings} >
            {template}
        </Slick>
    )
}

export default SliderTemplates
