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
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search a person's email" value={this.state.searchTerm} onChange={this.handleSearchTermEvent}/>
        <span className="input-group-btn">
          <button className="btn btn-secondary" onClick={() => this.searchAndClear(this.state.searchTerm)}>Search</button>
        </span>
      </div>
    );
  }
}

export default Search;
