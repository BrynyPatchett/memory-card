import { useEffect,useState } from "react";
import CardDisplay from "./cardDisplay";
import Loading from "./loading";
import "./styles/game.css"

function Game({currentScore, setCurrentScore, highScore, setHighScore}){

    //will be cardImages from API 
    const [imagesAPI, setImagesAPI] = useState('');

    //load card info form API on mount
    useEffect(()=>{

        const fetchData = async ()=>{
            //giphy was not loggin in at time using placeholder API key
             const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=bb2006d9d3454578be1a99cfad65913d&q=spongebob&limit=12",{mode:'cors'});
             const result = await response.json()
             const imageArray = result.data.map((elem,index) => ({id:index,src:elem.images.downsized.url}))
             setImagesAPI(imageArray);
             
        }
       
        fetchData().catch(console.error);
        
    },[])

    return(<div className="game">
    {imagesAPI ?  <CardDisplay currentScore={currentScore} setCurrentScore={setCurrentScore} highScore={highScore} setHighScore={setHighScore} images={imagesAPI}/> : <Loading/>}
    </div>)
}

export default Game;