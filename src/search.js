import React, { Component } from 'react'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this);
  }

  handleSearchTermEvent (event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render () {
    return (
      <div>
        <input type="text" placeholder="Search a person's email" value={this.props.searchTerm} onChange={this.handleSearchTermEvent}/>
        <button>Search</button>
      </div>
    )
  }
}

export default Search
