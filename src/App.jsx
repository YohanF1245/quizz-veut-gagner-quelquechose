import { useState, useSyncExternalStore } from 'react'
import dataeasy from './question-disney-facile.json'
import datad from './question-disney-moyen.json'
import data from './question-disney-difficile.json'
import backgroundimage from './qui-veut-gagner-des-millions.jpg'

function App() {
  const [questionId, setQuestionId] = useState(randomQuestion());
  const [winDisplay, setWinDisplay] = useState('none');
  const [loseDisplay, setLoseDisplay] = useState('none');
  const [nextQuestion, setNextQuestion] = useState('none');
  
  const handleClick = (event) => {
    setNextQuestion("block");
    if(event.target.value===data[questionId].correct_answer){
    setWinDisplay("block");
    setLoseDisplay("none");
    }else{
      setWinDisplay("none");
    setLoseDisplay("block");
    }
  }
  const nextQuestionButton = (event) => {
    setQuestionId(randomQuestion());
    setWinDisplay("none");
    setLoseDisplay("none");
    setNextQuestion("none");
  }
  return (
    <div>
    <Title></Title>
    <img src={backgroundimage}></img>
    <p>{data[questionId].question}</p>
    <input onClick={handleClick} type="button" id="1" value={data[questionId].choices[0]}></input>
    
    <input onClick={handleClick} type="button" id="2" value={data[questionId].choices[1]}></input>
    
    <input onClick={handleClick} type="button" id="3" value={data[questionId].choices[2]}></input>
    
    <input onClick={handleClick} type="button" id="4" value={data[questionId].choices[3]}></input>
    <p style={{ display: winDisplay }}>Gagné ! En effet la bonne réponse est : {data[questionId].correct_answer}</p>
    <p style={{ display: loseDisplay }}>Perdu ! La bonne réponse était : {data[questionId].correct_answer}</p>
    <input style={{ display: nextQuestion }} onClick={nextQuestionButton} type="button" value="Question suivante"></input>
    </div>
)
}
function randomQuestion(){
  return Math.floor(Math.random() * data.length)
}

data.map(question => {
  console.log(question.question)
});
function Title(){
  return(<h1>Quizz veux gagner quelquechose</h1>)
}
 function Buttonsdf(){
   return(<input type="button" id={id} value={value}></input>)
 }
export default App
