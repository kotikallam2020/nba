import React, { Component } from 'react';
import '../css/layout.css'

import Header from '../components/header';
import Footer from '../components/footer';
import Home from '../components/home';

class Layout extends Component {

    state = {
      showNav:false  
    }

    toggleSidenav = (action) =>{
        this.setState({
            showNav:action
        })
    }
 
    render(){
        return(
            <div>
                <Header
                    showNav={this.state.showNav}
                    onHideNav={() => this.toggleSidenav(false)}
                    onOpenNav={() => this.toggleSidenav(true)}
                />
                <Home />
                <Footer/>
            </div>
        )
    }

}

export default Layout;