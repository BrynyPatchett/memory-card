import { useState } from "react";
import "./styles/cardDisplay.css"


//card display will be given a list of loaded images and will randomise it each time a card is clicked. 
function CardDisplay(){

    const [clickedItems,setClickedItems] = useState([]);

    function randomiseArray(arry){
        arry.sort(() => Math.random()-0.5);
    }
    //create array of 12 numbers(placeholder for Images) 
    const arry = Array(12).fill().map((x,i) =>{
        return x = i;
    });
    randomiseArray(arry);

    return (
    <div className="cardDisplay">
        {arry.map((x)=> {

            {/*this will be cards that can be clicked on, , will be passed shuffle method and clicked list */}
          return <div className="card" key={x}>{x}</div>
     })}
    </div>)
}
export default CardDisplay;