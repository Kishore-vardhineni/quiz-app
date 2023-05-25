import React from 'react';
import './App.css'

function Display({question, index, changeHandler}) {
  const handler = (e) => {
    const temp = question.answer === e.target.value ? 1: 0;
    changeHandler(temp, index);
  }
  return (
    <div className="alignLeft">
      <div className='d-flex'>{index}
      <h3>{question.title}</h3>
      <div onChange={handler} style={{paddingLeft: "25px"}}>
        ({1})<input type="radio" value="A" name={index} /> {question.options[0]}&nbsp;
        ({2})<input type="radio" value="B" name={index} /> {question.options[1]}&nbsp;
        ({3})<input type="radio" value="C" name={index} /> {question.options[2]}&nbsp;
        ({4})<input type="radio" value="D" name={index} /> {question.options[3]}&nbsp;
      </div>
      </div>
    </div>
  );
}

export default Display
