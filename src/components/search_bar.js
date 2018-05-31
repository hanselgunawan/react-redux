import React, { Component } from 'react';//import React and get the 'Component' property

// Functional Component
// const SearchBar = () => {
//     return <input />; //it will create React.createElement on the background
// }

// Class Component
class SearchBar extends Component {
    constructor(props) {
        super(props);//calling parent method of 'Component'
        this.state = { term: ''};
    }

    render() {
        return(
            <div>
                <input
                    onChange={(event) => this.setState({ term: event.target.value })}
                    value={this.state.term}
                />
            </div>
        )
    }
}

export default SearchBar;