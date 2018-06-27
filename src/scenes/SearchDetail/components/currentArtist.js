import React from 'react';
const CurrentArtist = (props) => {
    if(props.artist.hasOwnProperty('name')){
        return (
            <div className="artistHeading">
                <div className="imageWrap">
                    <img src={props.artist.images && props.artist.images[0] ? props.artist.images[0].url : 'https://c1.staticflickr.com/3/2772/4161684484_32f5f4eef2.jpg'} alt={props.artist.name}/>
                </div>
                <h3>{props.artist.name}</h3>
            </div>
        )
    }else{
        return (
            <div className="artistHeading">
                <h1>Loading</h1>
            </div>
        )
    }

};

export default CurrentArtist;