
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/home';
import  Layout  from './hoc/layout';
import NewsArticles from './components/news/index';

 class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact Component={Home} />
                    
                    <Route path="/articles/:id" exact  Component={NewsArticles} />
                </Switch>
            </Layout>
        )
    }
}

export default Routes;