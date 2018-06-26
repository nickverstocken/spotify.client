import React, { Component } from 'react';

class SearchField extends Component{

    constructor(props){
        super(props);
        this.state = {
            search: '',
            artists: [],
            token: ''
        }
    }

    componentWillMount(){
        fetch('http://127.0.0.1:8000/api/token')
            .then(res => res.json())
            .then(data => this.setState({
              token: data.access_token
            }));
    }
    fetchArtists(searchVal){
        fetch(`https://api.spotify.com/v1/search?q=${searchVal}&type=artist&limit=5`, {
            headers: new Headers({
                'Authorization' : 'Bearer ' + this.state.token
            })
        })
            .then(res => res.json())
            .then(data => this.setState({
                artists: data.artists.items
            }));
        console.log(this.state.artists);
    }
    enterArtists(event){
        event.preventDefault();
        if(event.keyCode === 13){
            console.log(this.state.token);

        }
    }
    searchArtists(event){
        console.log(event.target.value);
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
               <span>{artist.name}</span>
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