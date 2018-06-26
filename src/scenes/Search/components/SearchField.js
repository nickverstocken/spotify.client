import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class SearchField extends Component{

    constructor(props){
        super(props);
        this.state = {
            search: '',
            artists: [],
            token: ''
        }
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/token')
            .then(res => res.json())
            .then(data => this.setState({
              token: data.access_token
            }));
    }
    fetchArtists(searchVal){
        fetch(`https://api.spotify.com/v1/search?q=${searchVal}&type=artist&limit=5&market=US`, {
            headers: new Headers({
                'Authorization' : 'Bearer ' + this.state.token
            })
        })
            .then(res => res.json())
            .then(data => {
                if(data.artists){
                    this.setState({
                        artists: data.artists.items
                    })
                }


            });
    }
    enterArtists(event){
        event.preventDefault();
        if(event.keyCode === 13){
            console.log(this.state.token);

        }
    }
    searchArtists(event){
        this.setState({
           search: event.target.value
        });
        if(event.target.value.trim()){
            this.fetchArtists(event.target.value);
        }else{
            this.setState({
               artists: []
            });
        }

    }
    render(){
        const artists = this.state.artists.map(artist => (
           <div key={artist.id} className="autocomplete_item">
               <Link to={`search/${artist.id}`}>{artist.name}</Link>
           </div>
        ));
        return(
            <div className="autocomplete_wrap">
                <input onKeyUp={this.searchArtists.bind(this)} type="text" placeholder="Search"/>
                <div className="autocomplete">
                    {artists}
                </div>
            </div>
        );
    }
}

export default SearchField