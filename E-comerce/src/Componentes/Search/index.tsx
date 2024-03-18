import { FC, FormEvent } from "react";
import './seach.css'
import { FcSearch } from "react-icons/fc";
import { SeachProps } from "./type";



const Search:FC<Partial<SeachProps>> = (props) => {
    const {onInput, placeholder}=props;

    const handleOnInput = (event: FormEvent<HTMLInputElement>) => {
        if (onInput) {
          onInput(event.currentTarget.value);
        }
      };

    return (
        <>
            <div className="search-container">

                <div>
                    <input placeholder={placeholder} type="text" name="search" onInput={handleOnInput}  />    
                </div>    
                <div className="icone-search">
                <FcSearch />
                </div>                 
            </div>        
        </>
    )
}

export {Search}