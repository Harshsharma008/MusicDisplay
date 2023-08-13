import { useEffect, useState } from "react";
// import { getSongs } from "../Services/api_client";
import { getSongs } from "../Services/api_client";
import { Search } from "../components/Search";
import { Songs } from "../components/Songs";
import { Player } from "../components/Player";
export const Searchpage = () => {
    const [allSongs, setSongs] = useState([]);
    const [flag, setFlag] = useState(false);
    const [song, setPlayerSong]= useState( null)
    // let song = null;
    const loadSongs = async () => {  // it is used to load the songs in the start of the page as latest page
        
        setSongs(await getSongs('Latest Songs'))
    }
    
    //component Life Cycle hook= useEffect
    useEffect(() => {
        loadSongs();
    }, [])
    const togglePlayer = (flag, songarg) => {
        setPlayerSong(songarg);
        setFlag(flag);
    }
    const getArtistName = async (artistName) => {
        // console.log("allSongs", artistName);
        console.log('Received Artist Name', artistName);
        getSongs(artistName);
        setSongs(await getSongs(artistName));// set the song is because the initial songs listt is empty
        
        // const jsx is fto use these component as a single component or in a group
        
    }
    const jsx = <>
        <Search fn={getArtistName} />
        <Songs fn={togglePlayer} allsongs={allSongs} />
    </>;
        return (
            <div className=" m-5 container p-3 mb-2 m-0  text-center  " >

                <h1 className="alert alert-info text-center bg-black text-white  m-0 " > Music Store </h1>
              {/* <Player/>  */}
                {flag ? <Player song={song} />:jsx} 

            </div>
        );

    }
