import './App.css';
import Question from './Question.json';
import Display from './Display';
import { useState } from 'react';

function App() {
  let tempMarks = [];
  const [marks, setMarks] = useState([]);
  const changeHandler = (value, index) => {
     tempMarks = marks;
     tempMarks[index] = value;
     setMarks([...tempMarks]);
  }
  return (
    <div>
       <center>
         {Question.map((question, index) => {
            return (
              <Display question={question} index={index} changeHandler={changeHandler}/>
            )
         })}
         <br/>&nbsp;
         <button className="quizBtn" onClick={() => alert(marks.reduce((a,b) => a+b))}>End Quiz</button>
         <br/>
         <br/>
       </center>
    </div>
  );
}

export default App;
