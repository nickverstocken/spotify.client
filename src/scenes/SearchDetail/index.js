import React, { Component } from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import CurrentArtist from './components/currentArtist';
import TopSongs from './components/topSongs';
import {connect} from "react-redux";
import {fetchArtist, fetchRelated, fetchTopSongs} from "./detailActions";

class SearchDetail extends Component {

    componentDidMount() {
        const { match: { params } } = this.props;
        this.props.fetchArtist(params.id);
        this.props.fetchTopSongs(params.id);
    }

    render() {
        return (
          <div className="main">
              <div className="inner">
                  <CurrentArtist artist={this.props.artist}/>
                  <TopSongs songs={this.props.songs}/>
              </div>
          </div>
        );
    }
}

SearchDetail.propTypes = {
    fetchArtist: PropTypes.func.isRequired,
    fetchRelated: PropTypes.func.isRequired,
    fetchTopSongs: PropTypes.func.isRequired,
    artist: PropTypes.object,
    songs: PropTypes.array,
    related: PropTypes.array
};

const mapStateToProps = state => ({
    artist: state.artistdetail.artist,
    songs: state.artistdetail.tracks,
    related: state.artistdetail.related
});

export default connect(mapStateToProps, {fetchArtist, fetchRelated, fetchTopSongs})(SearchDetail);