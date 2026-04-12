import { createContext, useState } from "react";

export const SongContext =createContext()

export const SongContextProvider = ({children}) =>{
    const [song ,setSong] = useState({
       "url": "https://ik.imagekit.io/owmvi0151/moodify/songs/Fakeeran_-_Zahrah_S_Khan_MyMp3Song__UQ_HnQwiD",
        "posterUrl": "https://ik.imagekit.io/owmvi0151/moodify/posters/Fakeeran_-_Zahrah_S_Khan_MyMp3Song__ZquIZM4ml.jpeg",
        "title": "Fakeeran - Zahrah S Khan(MyMp3Song)",
        "mood": "happy",
        
    })

    const [loading , setLoading] =useState(false)

    return (
        <SongContext.Provider value={{loading , setLoading , song , setSong}}  >
            {children}
        </SongContext.Provider>
    )
}
