import { useState } from "react"

function EightBall({answers}) {
    let [text, changeText] = useState('Think of a question')
    let [color, changeColor] = useState("black")
    function chooseAnswer() {
        const idx = Math.floor(Math.random() * answers.length) + 1
        const answer = answers[idx]
        console.log(answers)
        changeText(answer.msg)
        changeColor(answer.color)
    }
    return (
        <div style={{backgroundColor: color }} onClick={chooseAnswer} className="EightBall">
            <h1 style={{color: "white"}}>{text}</h1>
        </div>
    )
}

export default EightBall