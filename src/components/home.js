import React from 'react';
import NewsSlider from './slider';
import NewsList from './newsList';
import VideosList from './videosList';


const Home = () => {
    return (
        <div>
            <div>
                <NewsSlider 
                    type="featured" 
                    start = {0}
                    end = {5}
                    settings = {{
                        dots:false
                    }}
                />
            </div>
            <div>
                <NewsList 
                    type="card"
                    start={3}
                    end={6}
                    loadmore={true}
                />
            </div>
            <div>
                <VideosList 
                    type="card" 
                    title={true} 
                    loadmore={true} 
                    start={0} 
                    amount={3}
                />
            </div>
        </div>
    );
}

export default Home;
