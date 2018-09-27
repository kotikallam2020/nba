import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { URL} from '../config';
import '../css/sideNav.css';
import Button from './buttons';
import CardInfo from './cardInfo';


export default class NewsList extends Component {
    state = {
        items : [],
        start: this.props.start,
        end: this.props.end,
        teams: []
    }
    componentWillMount(){
        this.request(this.state.start, this.state.end);
    }
    request = (start,end) =>{
        if (this.state.teams.length < 1) {
            Axios.get(`${URL}/teams`).then(resp => {
                this.setState({
                    teams: resp.data
                })
            })
        }
        Axios.get(`${URL}/articles?_start=${start}&_end=${end}`).then(response => {
            this.setState({
                items: [...this.state.items, ...response.data],
                start,
                end
            })
        })
    }
    loadMore = () => {
        let end = this.state.end + 3;
        this.request(this.state.end, end)
    }
    renderNews = (type) => {
        let templete = null;
        switch(type) {
            case('card'): 
            
            templete = this.state.items.map((item, i ) => (
                <CSSTransition
                    classNames= {{
                        enter: 'newsList-wrapper',
                        enterActive:'newsList-wrapper-enter'
                    }}
                    timeout = {500}
                    key={i}
                    
                    >
                    <div>
                        <div className="news-list-item" key={i}>
                            <Link to={`/articles/${item.id}`}></Link>
                            <CardInfo teams={this.state.teams} team={item.team} date={item.date} />
                            <h2>{item.title}</h2>
                        </div>
                    </div>
                </CSSTransition>
            ))
            break;
            default: 
            templete = null
        }
        return templete;
    }
    render() {
        return (
            <div>
                <TransitionGroup 
                    component="div"
                    className="list">
                    {this.renderNews(this.props.type)}
               </TransitionGroup>
               <div>
                    <Button
                        type="loadmore"
                        cta="Load More News"
                        loadMore={()=> this.loadMore()} />
               </div>
            </div>
        )
    }
}
