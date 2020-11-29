import React from 'react';
import {Link} from 'react-router-dom';

const Track = (props) => {
    const {track} = props;

    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm" style={{borderRadius: "20px"}}>
                <div className="card-body">
                    <h5 style={{fontSize: "20px"}}>{track.artist_name}</h5>
                    <p className="card-text" style={{fontSize: "20px"}}>
                        <strong><i className="fas fa-play"></i>Track</strong>: {track.track_name}
                        <br />
                        <strong><i className="fas fa-compact-disc"></i>Album</strong>: {track.album_name}
                    </p>
                    <Link to={`lyrics/track/${track.track_id}`} className="btn btn-dark btn-block" style={{borderRadius: "20px", fontWeight:"400"}}>
                        <i className="fas fa-chevron-right"></i> View Lyrics
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Track;
