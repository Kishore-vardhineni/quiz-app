import React, { useState } from 'react';
import './App.css'

function Display({question, index, changeHandler}) {
  const handler = (e) => {
    const temp = question.answer === e.target.value ? 1: 0;
    changeHandler(temp, index);
  }

  const [isDivVisible, setIsDivVisible] = useState(true);

  const explanationHandler = () => {
     setIsDivVisible(!isDivVisible);
  }
  return (
    <div className="alignLeft">
      <h4>({index}){question.title}</h4>
      <div style={{paddingLeft: '15px'}} onChange={handler}>
        ({1})<input type="radio" value="A" name={index} /> {question.options[0]}&nbsp;
        ({2})<input type="radio" value="B" name={index} /> {question.options[1]}&nbsp;
        ({3})<input type="radio" value="C" name={index} /> {question.options[2]}&nbsp;
        ({4})<input type="radio" value="D" name={index} /> {question.options[3]}&nbsp;
      </div>
      <div className='questionExplnation text-alignment' onClick={explanationHandler}> {isDivVisible ? 'Show Answer' : 'Hide Answer'}</div>
      <div className='text-alignment' {...isDivVisible}>
       <div>Answer - {!isDivVisible && question.explanation}</div><br/>
      </div>
    </div>
  );
}

export default Display
