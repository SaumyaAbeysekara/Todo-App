import React, { useRef } from "react";
import '../App.css'

type Title={
    title:string;
    setTitle:React.Dispatch<React.SetStateAction<string>>;

}

export const TitleInput=({title,setTitle}:Title)=>{
    const inputRef = useRef<HTMLInputElement>(null);
    return(
        <form className="inputTitle">
            <input 
            ref={inputRef}
            className="title"
            type="input" 
            value={title} 
            placeholder="Title Here"
            onChange={(e)=>setTitle(e.target.value)}
            />

        </form>

    )
}