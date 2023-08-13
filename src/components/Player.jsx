import { Songs } from "./Songs";

export const Player = () => {
  

  return (
    <div>
      <button className="btn btn-success" >
        
        Back To songs
      </button>
      <p> {/* {song.artistName} */} </p> <br />
      <br />
      <audio controls>
        <source src="" type="audio/mp4/" />
        you 'r browser doesn' t support audio element
      </audio>
    </div>
  );
};
