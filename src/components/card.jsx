function Card({cardData,imageSuffle,id,cardClick}){

    function handleCardClick(){
        cardClick(id);
        imageSuffle();
        console.log(cardData);
    }

    return (
        <div className="card" onClick={handleCardClick}><img src={cardData} alt="testImage" className="cardImage"/></div>
    )
}

export default Card;