
function ScoreDisplay({currentScore,highScore,className}){


    return (
        <div className={className}>
            <div>Score: {currentScore}</div>
            <div>HighScore: {highScore}</div>
        </div>
    )
}

export default ScoreDisplay;