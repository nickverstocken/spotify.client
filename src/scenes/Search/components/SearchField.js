import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchArtists, firstArtist } from "../searchActions";

class SearchField extends Component {

    searchArtists = (event) => {
        this.props.searchArtists(event.target.value);
    }
    setSelectedArtist = (name) => (event) => {
        this.props.firstArtist(name);
    }
    render() {
        const artists = this.props.artists.map(artist => (
            <div onClick={this.setSelectedArtist(artist.name)}  key={artist.id} className="autocomplete_item">
                <Link to={`search/${artist.id}`}>{artist.name}</Link>
            </div>
        ));
        return (
            <div className="autocomplete_wrap">
                <input onKeyUp={this.searchArtists} type="text" placeholder="Search" defaultValue={this.props.selectedartist}/>
                <div className="autocomplete">
                    {artists}
                </div>
            </div>
        );
    }
}

SearchField.propTypes = {
    searchArtists: PropTypes.func.isRequired,
    firstArtist: PropTypes.func.isRequired,
    artists: PropTypes.array.isRequired,
    artist: PropTypes.string
};

const mapStateToProps = state => ({
    // state.searches -> naam komt van de root reducer!!
    artists: state.searches.artists,
    selectedartist: state.searches.artist
});

export default connect(mapStateToProps, {searchArtists, firstArtist})(SearchField);