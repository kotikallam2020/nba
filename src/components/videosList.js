import React, { Component } from 'react'
import  Axios  from 'axios';
import { URL } from '../config';
import Button from './buttons';
import '../css/sideNav.css';
import VideosTemplate from './videosListTemplate';


export default class VideosList extends Component {
    state = {
        teams: [],
        videos: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }
    componentWillMount(){
        this.request(this.state.start,this.state.end)
    }

    request = (start, end) => {
        if(this.state.teams.length < 1) {
            Axios.get(`${URL}/teams`).then(res => {
                this.setState({
                        teams: res.data
                    })
            })
        }
        Axios.get(`${URL}/videos?start=${start}&end=${end}`).then(resp => {
            this.setState({
                videos:[...this.state.videos, ...resp.data],
                start,  
                end
            })
        })
    }
    renderVideos = () => {
        let template = null;
        switch(this.props.type) {
            case('card'): 
                template = <VideosTemplate data= {this.state.videos} teams={this.state.teams} />
            break;
            default:
            break;
        }
        return template;
    }
    loadmore = () => {
        let end = this.state.end + this.state.amount;
        this.request(this.state.end, end);
    }
    renderTitle = () => {
        return this.props.title ? 
            <h3><strong>NBA </strong>Videos</h3> 
        : null
    }
    renderButton = () => {
        return this.props.loadmore ? 
            <Button 
                type="loadmore" 
                loadMore={()=> this.loadmore()}
                cta="Load More Videos" >
                
            </Button> 
        : 
           
            <Button type="linkTo" cta="More Videos" linkTo="/videos" />
    }

    render() {
        console.log("videos..", this.state.videos);
        return (
            <div>
                <div className="videoslist-wrapper">
                    {this.renderTitle()}
                    {this.renderVideos()}
                    {this.renderButton()}
                </div>
                
               
            </div>
        )
    }
}
