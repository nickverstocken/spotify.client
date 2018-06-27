import React, {Component} from 'react';

class TopSongs extends Component {
    constructor(props){
        super(props);
    }
    playAudio = (event) => song => {
        console.log(song);
    };
    render() {
        this.props.songs.splice(3)
        console.log(this.props.songs );
        const songs = this.props.songs.map(song => (
            <div className="playwrap">
                <div onClick={this.playAudio(song)}  key={song.id} className="play"></div>
                <div className="spin"></div>
            </div>
        ));
        return (
            <div className="songswrap">
                <div className="playButtons">
                    {songs}
                </div>
            </div>
        );
    }
}


export default TopSongs;