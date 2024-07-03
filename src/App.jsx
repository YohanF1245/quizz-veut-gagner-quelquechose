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
  
  

  const fontStyle = {
    textShadow: '0 0 9px #000000, 0 0 9px #000000',
    color: 'white',
    fontSize: "25px",
  }

  const styleBar = {
    backgroundImage: 'linear-gradient(to top, #1600ff, #6547ff, #8f73ff, #b39dff, #d3c7ff, #d3c7ff, #d3c7ff, #d3c7ff, #b39dff, #8f73ff, #6547ff, #1600ff)',
    minHeight: '100px',
    
    width: '60%',
    border: "5px solid white",
    boxShadow: '0px 10px 0px 0px #000000, 0px -10px 0px 0px #000000',
    borderLeft: "0px transparent",
    borderRight: "0px transparent",
  }
  const styleBarButt = {
    backgroundImage: 'linear-gradient(to top, #1600ff, #6547ff, #8f73ff, #b39dff, #d3c7ff, #d3c7ff, #d3c7ff, #d3c7ff, #b39dff, #8f73ff, #6547ff, #1600ff)',
    height:'75px',
    width: '20%',
    border: "5px solid white",
    boxShadow: '0px 10px 0px 0px #000000, 0px -10px 0px 0px #000000',
    borderLeft: "0px transparent",
    borderRight: "0px transparent",
  }
  const styleMiniBar = {
    backgroundImage: 'linear-gradient(to top, #1600ff, #6547ff, #8f73ff, #b39dff, #d3c7ff, #d3c7ff, #d3c7ff, #d3c7ff, #b39dff, #8f73ff, #6547ff, #1600ff)',
    height: '10px',
    
    width: '10%',
    border: "5px solid white",
    boxShadow: '0px 10px 0px 0px #000000, 0px -10px 0px 0px #000000',
    borderLeft: "0px transparent",
    borderRight: "0px transparent",
  }
  const styleHexLeft = {
    backgroundImage: 'linear-gradient(to top, #1600ff, #6547ff, #8f73ff, #b39dff, #d3c7ff, #d3c7ff, #d3c7ff, #d3c7ff, #b39dff, #8f73ff, #6547ff, #1600ff)',
    minHeight: '100px',
    height:'100px',
    width: '10%',
    border: "5px solid white",
    boxShadow: '0px 10px 0px 0px #000000, 0px -10px 0px 0px #000000',
    borderLeft: "0px transparent",
    borderRight: "0px transparent",
    borderRadius: '100% 0% 0% 100%',
  }
  const styleHexRight = {
    backgroundImage: 'linear-gradient(to top, #1600ff, #6547ff, #8f73ff, #b39dff, #d3c7ff, #d3c7ff, #d3c7ff, #d3c7ff, #b39dff, #8f73ff, #6547ff, #1600ff)',
    height:'100px',
    width: '10%',
    border: "5px solid white",
    boxShadow: '0px 10px 0px 0px #000000, 0px -10px 0px 0px #000000',
    borderLeft: "0px transparent",
    borderRight: "0px transparent",
    borderRadius: '0% 100% 100% 0%',
  }
  const styleHexLeftButt = {
    backgroundImage: 'linear-gradient(to top, #1600ff, #6547ff, #8f73ff, #b39dff, #d3c7ff, #d3c7ff, #d3c7ff, #d3c7ff, #b39dff, #8f73ff, #6547ff, #1600ff)',
    
    height:'75px',
    width: '10%',
    border: "5px solid white",
    boxShadow: '0px 10px 0px 0px #000000, 0px -10px 0px 0px #000000',
    borderLeft: "0px transparent",
    borderRight: "0px transparent",
    borderRadius: '100% 0% 0% 100%',
  }
  const styleHexRightButt = {
    backgroundImage: 'linear-gradient(to top, #1600ff, #6547ff, #8f73ff, #b39dff, #d3c7ff, #d3c7ff, #d3c7ff, #d3c7ff, #b39dff, #8f73ff, #6547ff, #1600ff)',
    minHeight: '75px',
    width: '10%',
    border: "5px solid white",
    boxShadow: '0px 10px 0px 0px #000000, 0px -10px 0px 0px #000000',
    borderLeft: "0px transparent",
    borderRight: "0px transparent",
    borderRadius: '0% 100% 100% 0%',
  }
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
    <div style={{height:"100vh", backgroundImage: `url(${backgroundimage})`, backgroundRepeat:"no-repeat", backgroundSize:"100%"}}>
    <Title></Title>
    {/* <img src={backgroundimage} style={{width:"50%", marginLeft:"25%"}}></img> */}
    <div style={{marginTop:"35%", display:'flex', alignItems:'center'}}>
    <div style={styleMiniBar}></div>
    <div style={styleHexLeft}></div>
    <div style={styleBar}>
    <p style={fontStyle}>{data[questionId].question}</p></div>
    <div style={styleHexRight}></div>
    
    <div style={styleMiniBar}></div>
    </div>
    <div style={{marginTop:"25px", display:'flex', alignItems:'center'}}>
      <div style={styleMiniBar}></div>
      <div style={styleHexLeftButt}></div>
    <input style={{...styleBarButt,...fontStyle}} onClick={handleClick} type="button" id="1" value={data[questionId].choices[0]}></input>
    <div style={styleHexRightButt}></div>
    <div style={styleHexLeftButt}></div>
    <input style={{...styleBarButt,...fontStyle}} onClick={handleClick} type="button" id="2" value={data[questionId].choices[1]}></input>
    <div style={styleHexRightButt}></div>
    <div style={styleMiniBar}></div>
    </div>
    
    <div style={{marginTop:"25px", display:'flex', alignItems:'center'}}>
      <div style={styleMiniBar}></div>
      <div style={styleHexLeftButt}></div>
    <input style={{...styleBarButt,...fontStyle}} onClick={handleClick} type="button" id="3" value={data[questionId].choices[2]}></input>
    <div style={styleHexRightButt}></div>
    <div style={styleHexLeftButt}></div>
    <input style={{...styleBarButt,...fontStyle}} onClick={handleClick} type="button" id="4" value={data[questionId].choices[3]}></input>
    <div style={styleHexRightButt}></div>
    <div style={styleMiniBar}></div>
    </div>

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
