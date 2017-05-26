import React, { Component } from 'react';
import Search from './search';
import Info from './info';
import axios from 'axios';
import apiKey from './key.js'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      infoObject: {}
    };

    this.searchPerson = this.searchPerson.bind(this);
  }
  
  searchPerson (email) {
    axios({
      method: 'get',
      url: `https://api.fullcontact.com/v2/person.json?email=${email}&apiKey=${apiKey}`,
      responseType: 'json'
    })
    .then((response) => {
      if (response.status !== 200) {
        alert('Received status code:', response.status);
      } else {
        this.setState({
          infoObject: response.data
        });
      }
    })
    .catch((error) =>{
      alert(error.response.data.message);
    })
  }

  render() {
    return (
      <div className="container app">
        <div className="row">
          <div className="col-md-offset-4 col-lg-4">
            <h1>Person Search</h1>
            <Search search={this.searchPerson}/>
            <Info infoObject={this.state.infoObject}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
