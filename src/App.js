import React, { Component } from 'react';
import Search from './search';
import Info from './info';
import axios from 'axios';
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
      url: `https://api.fullcontact.com/v2/person.json?email=${email}&apiKey=f6bbbb0ebc51003`,
      responseType: 'json'
    })
    .then((response) => {
      if (response.status !== 200) {
        alert('Received status code:', response.status)
      } else {
        this.setState({
          infoObject: response.data
        })
      }
      console.log(this.state.infoObject);
    })
    .catch(function(error){
      console.log(error);
      alert(error);
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
