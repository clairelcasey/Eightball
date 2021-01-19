import { useState } from "react";
import randomElement from "./randomElement";
import './EightBall.css'
import ColorCounter from './ColorCounter';

/** EightBall 
 * 
 * Props:
 *  answers: array of objects [ {msg, color } ...]
 * 
 * State:
 *  isAnswer: boolean
 *  msgData: object { msg, color }
 * 
 * App -> EightBall
 */

function EightBall({ answers }) {
  const questionData = { msg: "Think of a question.", color: "black" };
  const initialColors = [...new Set(answers.map((ans) => ans.color))];
  const initialCountsForColors = initialColors.map(color => ({ color, count: 0 }));

  const [isAnswer, setIsAnswer] = useState(false);
  const [msgData, setMsgData] = useState(questionData);
  const [currCountsForColors, setCurrCountsForColors] = useState(initialCountsForColors);

  //  ALTERNATIVE SOLUTION CONSIDERED. Decided against because getting a
  //  random element each time (regardless of if question/ answer).
  //  const color = (isAnswer) ? randAnswer.color : "black";
  //  const text = (isAnswer)? randAnswer.msg : "Think of a question";

  /** 
   * toggles isAnswer and sets msgData with questionData or answer data from answers
   **/  
  function handleClick() {
    if (!isAnswer) {
      const randAnswer = randomElement(answers);
      setMsgData(randAnswer);
      
      for (let ele of currCountsForColors) {
        if (ele.color === randAnswer.color) {
          ele.count += 1;
        }
      }
      setCurrCountsForColors(currCountsForColors);
      
    } else {
      setMsgData(questionData);
    }
    setIsAnswer(!isAnswer);
  }

  const styles = {
    backgroundColor: msgData.color,
  }

  return (
    <div>
      <button className="EightBall" onClick={handleClick} style={styles}>
        <p>{msgData.msg}</p>
      </button>

      <ColorCounter currCountsForColors={currCountsForColors}/>
    </div>
  )
}

EightBall.defaultProps = {
  answers: [
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
}

export default EightBall;