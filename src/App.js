import './App.css';
import Question from './Question.json';
import Display from './Display';

function App() {

  return (
    <div>
       <center>
         {Question.map((question, index) => {
            return (
              <Display question={question} index={index}/>
            )
         })}
       </center>
    </div>
  );
}

export default App;
