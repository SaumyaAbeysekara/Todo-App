import React, { useRef } from "react";
import '../App'


type Description={
    description:string;
    setDescription:React.Dispatch<React.SetStateAction<string>>;

}

export const DescriptionInput=({description,setDescription}:Description)=>{
    const inputRef = useRef<HTMLInputElement>(null);
    return(
        <form className="inputDescription">
            <input 
            className='desc'
            ref={inputRef}
            type="input" 
            value={description} 
            placeholder="Description ..."
            onChange={(e)=>setDescription(e.target.value)}
            />

        </form>

    )
}