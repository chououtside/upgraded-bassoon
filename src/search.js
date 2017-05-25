import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
  constructor (props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this);
  }

  componentWillMount () {
    axios({
      method: 'get',
      url: 'https://api.fullcontact.com/v2/person.json?email=chmtek@gmail.com&apiKey=f6bbbb0ebc51003',
      responseType: 'json'
    })
    .then(function(response){
      console.log(response)
    })
    .catch(function(error){
      console.log('this is', error)
      alert(error)
    })
  }

  handleSearchTermEvent (event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  render () {
    return (
      <div>
        <input type="text" placeholder="Search a person's email" value={this.props.searchTerm} onChange={this.handleSearchTermEvent}/>
        <button>Search</button>
      </div>
    );
  }
}

export default Search;
