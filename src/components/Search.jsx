import { useRef } from "react";
export const Search = ({fn}) => {
    const artist = useRef(); // this is use to take the input with the dom activity 
    return ( 
    <>
        <label > Artist Name </label>
        
        < input    ref={artist}   
        type = 'text'
        className = "form-control "
        placeholder = "Type to Search Here!" />
            <button className="btn btn-success"
                onClick={() => {
                    fn (artist.current.value);
                }}
            >Search </button>
            <br />
            <br/>
                </>
    );
}