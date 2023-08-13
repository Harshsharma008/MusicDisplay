import { useState } from "react";

export const Song = ({ fn, song }) => {
  console.log(song)
  const [playerFlag, setPlayerFlag] = useState(false);
  const showPlayer = () => {
    setPlayerFlag(!playerFlag);
    fn(true, song);
  }
  return (
    <div className="row">
      <div className="col-4 card w-25 p-3 border border-5 shadow p-3 mb-5 bg-body-tertiary rounded" >
        <img src={song.artworkUrl100} alt="album" />
      </div>
      <div className="col-4">
       
        <h3><b>Artist Name:</b> <i> {song.artistName}</i></h3>
        <br/>
        <h3><b>Track Name:</b> <i>{song.trackName}</i></h3>
        <br />
        <h5><b>Artist Id:</b> <i>{song.artistId}</i></h5>
      </div>
      <div className="col-4">
        <button onClick={showPlayer} className="btn btn-primary"> Listen   </button>
      </div>
    </div>
  );
};
