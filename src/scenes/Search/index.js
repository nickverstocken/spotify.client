import React, { Component } from 'react';
import SearchField from './components/SearchField';
import './styles.css';

class Search extends Component {
    render() {
        return (
          <div className="main">
              <div className="inner">
                  <header>
                      <h1>Discover</h1>
                  </header>

                  <h2>
                      Discover new music and artist with the push of a button!
                  </h2>
                  <h3>
                      Enter the name of an artist you like :
                  </h3>
                  <SearchField/>
              </div>
              <footer>
                  Made by : <a>Nick Verstocken</a> - Powered by : <a className="spotifyLink" href="http://www.spotify.com">Spotify</a>
              </footer>
          </div>
        );
    }
}

export default Search;