// import React from node_modules/react
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';//we should put the actual relative PATH for Components. No need to put '.js' extension.
const API_KEY = 'AIzaSyAeToo6vapEqsV-wm4UcDLaA0CwiVEHpVs';

// Create a new component. This component should produce some HTML
class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos:[]
        };

        YTSearch({key: API_KEY, term: 'adele'}, (videos) => {
            this.setState({ videos });//this is ES6 -> this.setState({ videos:videos }); MUST have the same name between object and callback function
        });
    }
    render() {
        return (    //parentheses is an optional
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// App is a CLASS
// <App /> is an INSTANCE / the representation of an object

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

//document.querySelector is used to search a place inside the HTML where <App /> instance will be displayed