import React, { useState } from 'react';


function Eightball(props) {
    const [color, setColor] = useState('Black');
    const [msg, setMsg] = useState('Think of a question');
    const [colorCount, setColorCount] = useState({
        red: 0,
        goldenrod: 0,
        green: 0
    })


    function getRandom() {
        return props.answers[Math.floor(Math.random() * props.answers.length)];
    }

    function handleClick() {
        let random = getRandom();
        colorCount[random.color]++;
        setColorCount(colorCount);
        setColor(random.color);
        setMsg(random.msg);
    }

    function reset() {
        setColor("black");
        setMsg('Think of a question');
    }

    let background = { backgroundColor: color, color: "white" }
    return (
        <div className="Eightball">
            <span>
                <p className="Eightball-message" style={background}>{msg}</p>
            </span>
            <button className="Eightball-button" onClick={handleClick}>Reveal</button>
            <button className="Eightball-button" onClick={reset}>Reset</button> <br></br>

            <span>Red: {colorCount.red} </span>
            <span>Yellow: {colorCount.goldenrod} </span>
            <span>Green: {colorCount.green}</span>
        </div>
    )
}


const answers = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
]

Eightball.defaultProps = { answers };

export default Eightball;