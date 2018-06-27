import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from '../scenes/Search'
import SearchDetail from '../scenes/SearchDetail';


class App extends Component {

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/token')
            .then(res => res.json())
            .then(data => localStorage.setItem('token', data.access_token));
    }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="AppWrap">
            <Route exact={true} path="/" component={Search} />
            <Route path="/search/:id" component={SearchDetail} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
