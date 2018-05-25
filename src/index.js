// import React from node_modules/react
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';//we should put the actual relative PATH for Components. No need to put '.js' extension.

//AIzaSyAeToo6vapEqsV-wm4UcDLaA0CwiVEHpVs
const API_KEY = 'AIzaSyAeToo6vapEqsV-wm4UcDLaA0CwiVEHpVs';

// Create a new component. This component should produce some HTML
const App = () => {
    return (    //parentheses is an optional
        <div>
            <SearchBar />
        </div>
    );
}

// App is a CLASS
// <App /> is an INSTANCE / the representation of an object

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

//document.querySelector is used to search a place inside the HTML where <App /> instance will be displayed