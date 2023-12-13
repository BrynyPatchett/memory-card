import { useEffect,useState } from "react";
import CardDisplay from "./cardDisplay";
import Loading from "./loading";
import "./styles/game.css"

function Game({currentScore, setCurrentScore, highScore, setHighScore}){

    const [apiCall, setApiCall] = useState('');

    //load card info form API on mount
    useEffect(()=>{

        const fetchData = async ()=>{

            function sleep(ms){
                return new Promise(resolve=>setTimeout(() => resolve("done!"),ms))
            }
            const result = await sleep(1000);
            setApiCall(result)
            return result;
        }
       
        const result =  fetchData().catch(console.error);
        console.log(result)
        

    },[])

    return(<div className="game">
    {apiCall ?  <CardDisplay /> : <Loading/>}
    </div>)
}

export default Game;