import { Song } from "./Song";

export const Songs = ({fn,allsongs}) => {  // destructured form
  // console.log('**** allSongs',{allsongs });
  // allSongs --> convert --> JSX
  //map(JS function)
  return (
    <>
      
      {/* // here key is used to differenciate the songs from each other */}
      {allsongs.map((currentSong, index) => <Song fn={fn} key={index} song={currentSong} /> 
        
        )}
      
    </>
  );
};
