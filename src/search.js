import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
  constructor (props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this);
  }

  handleSearchTermEvent (event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  searchAndClear (email) {
    this.props.search(email);
    this.setState({
      searchTerm: ''
    });
  }

  render () {
    return (
      <div>
        <input type="text" placeholder="Search a person's email" value={this.state.searchTerm} onChange={this.handleSearchTermEvent}/>
        <button onClick={() => this.searchAndClear(this.state.searchTerm)}>Search</button>
      </div>
    );
  }
}

export default Search;
