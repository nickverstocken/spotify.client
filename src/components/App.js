import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from '../scenes/Search'


const SearchDetail = () => <h2>SearchDetail</h2>;

class App extends Component {
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
