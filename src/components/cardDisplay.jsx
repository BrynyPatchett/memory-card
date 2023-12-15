import { useState } from "react";
import Card from "./card"; 
import "./styles/cardDisplay.css"


//card display will be given a list of loaded images and will randomise it each time a card is clicked. 
function CardDisplay({currentScore,setCurrentScore, highScore ,setHighScore,images}){

    const [clickedItems,setClickedItems] = useState(Array(12).fill(0));
    const [imageArray,setImageArray] = useState([...images].sort(() => Math.random()-0.5));
   
    function shuffleImages(){
        const randomised = [...imageArray].sort(() => Math.random()-0.5);
        setImageArray(randomised);
    }

    function cardClick(id){
        console.log(clickedItems);
        console.log(clickedItems.length);
        if(clickedItems[id]!==0){
            setCurrentScore(0);
            setClickedItems(Array(12).fill(0))
            console.log("duplicted click!,reset game");
            return;
        }
        setCurrentScore(currentScore + 1);
        if(currentScore >= highScore){
            setHighScore(highScore+1);
        }
        //Check +1 as currentScore is not updated till next render
        if(currentScore + 1 === clickedItems.length){
            console.log("You won :)")
        }
        const updatedArray = clickedItems.map((x,i)=>{
            if(i === id){
                return x + 1;
            }else{
                return x;
            }
        })
        setClickedItems(updatedArray);
       
    }
   
    return (
    <div className="cardDisplay">
        {imageArray.map((x)=> {
          return <Card className="card"  cardData={x.src} key={x.id} imageSuffle={shuffleImages} cardClick={cardClick} id={x.id}/>
     })}
    </div>)
}
export default CardDisplay;