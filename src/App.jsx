import { useState, useSyncExternalStore } from 'react'
import disneyEasy from './question-disney-facile.json'
import disneyMedium from './question-disney-moyen.json'
import disneyHard from './question-disney-difficile.json'
import cinema from './question-cinema.json'
import harryPotter from './question-harry-potter.json'
import questions from './questions.json'
import './title.css';
import './modal-end.css';
import './select.css';
import backgroundimage from './qui-veut-gagner-des-millions.jpg'

function App() {
  const datas = [
    { value: 'disneyEasy', label: "Disney facile"},
    { value: 'disneyMedium', label: "Disney moyen"},
    { value: 'disneyHard', label: "Disney difficile"},
    { value: 'cinema', label: "Cinema"},
    { value: 'harryPotter', label: "Harry Potter"}
  ];
 
  
  
  const [selectedTheme, setSelectedTheme] = useState("Cinema");
  const [questionId, setQuestionId] = useState(randomQuestion(questions.categories.find(category => category.name === selectedTheme).questions));
  const [winDisplay, setWinDisplay] = useState('none');
  const [loseDisplay, setLoseDisplay] = useState('none');
  const [nextQuestion, setNextQuestion] = useState('none');
  const [endDisplay, setEndDisplay] = useState('none');
  console.log(questions.categories.find(category => category.name === selectedTheme));
  const fontStyle = {
    textShadow: '0 0 9px #000000, 0 0 9px #000000',
    color: 'white',
    fontSize: "25px",
  }
 const handleSelect = (event) => {
    const selectedValue = event.target.value;
  if(selectedValue !=="nothing"){
   setSelectedTheme(selectedValue);
  }
    
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
    width: '30%',
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
  const styleEnd = {
    display:"flex",
    flexDirection:"column",
    jutifyContent:"center",
    alignItems:"center",
    width:"30%",
    height:'30%',
   borderRadius: "35px",
   position:"absolute",
   left:"50%",
   border:"10px solid black",
   transform: "translate(-50%,0)",
    display:"block",
    backgroundColor: "rgba(255,255,255,0.5)",
  }

  const styleHexLeftButt = {
    backgroundImage: 'linear-gradient(to top, #1600ff, #6547ff, #8f73ff, #b39dff, #d3c7ff, #d3c7ff, #d3c7ff, #d3c7ff, #b39dff, #8f73ff, #6547ff, #1600ff)',
    
    height:'75px',
    width: '5%',
    border: "5px solid white",
    boxShadow: '0px 10px 0px 0px #000000, 0px -10px 0px 0px #000000',
    borderLeft: "0px transparent",
    borderRight: "0px transparent",
    borderRadius: '100% 0% 0% 100%',
  }
  const styleHexRightButt = {
    backgroundImage: 'linear-gradient(to top, #1600ff, #6547ff, #8f73ff, #b39dff, #d3c7ff, #d3c7ff, #d3c7ff, #d3c7ff, #b39dff, #8f73ff, #6547ff, #1600ff)',
    minHeight: '75px',
    width: '5%',
    border: "5px solid white",
    boxShadow: '0px 10px 0px 0px #000000, 0px -10px 0px 0px #000000',
    borderLeft: "0px transparent",
    borderRight: "0px transparent",
    borderRadius: '0% 100% 100% 0%',
  }
  
  const handleClick = (event) => {
    setEndDisplay("flex");
    setNextQuestion("block");
    if(event.target.value===questions.categories.find(category => category.name === selectedTheme).questions[questionId].correct_answer){
    setWinDisplay("block");
    setLoseDisplay("none");
    }else{
      setWinDisplay("none");
    setLoseDisplay("block");
    }
  }
  const nextQuestionButton = (event) => {
    setQuestionId(randomQuestion(questions.categories.find(category => category.name === selectedTheme).questions));
    setWinDisplay("none");
    setLoseDisplay("none");
    setNextQuestion("none");
    setEndDisplay('none');
  }
  const combinedStyleEnd = {
    ...styleEnd,
    display: endDisplay
  }
  return (
    <div style={{height:"100vh", backgroundImage: `url(${backgroundimage})`, backgroundRepeat:"no-repeat", backgroundSize:"100%"}}>
    <div className="text-effect-wrapper , sizeMatters">
      
    <Title></Title>
    
    </div>
    <div  class="select-category" style={{ width: "30%", marginLeft:"35%", textAlign:"center"}}>
      <select onChange={handleSelect} name="theme" id="theme"> 
      <option value="nothing">Sélectionnez un thème</option>
      {datas.map((item) => (
          <option key={item.value} value={item.label}>
            {item.label}
          </option>
        ))}
      </select>
    </div>

    {/* <img src={backgroundimage} style={{width:"50%", marginLeft:"25%"}}></img> */}
    <div style={{position: "absolute", bottom:"0",width:"100%"}}>
    <div style={{ display:'flex', alignItems:'center'}}>
    <div style={styleMiniBar}></div>
    <div style={styleHexLeft}></div>
    <div style={styleBar}>
    <p style={fontStyle}>{questions.categories.find(category => category.name === selectedTheme).questions[questionId].question}</p></div>
    <div style={styleHexRight}></div>
    
    <div style={styleMiniBar}></div>
    </div>
    <div style={{marginTop:"25px", display:'flex', alignItems:'center'}}>
      <div style={styleMiniBar}></div>
      <div style={styleHexLeftButt}></div>
    <input style={{...styleBarButt,...fontStyle}} onClick={handleClick} type="button" id="1" value={questions.categories.find(category => category.name === selectedTheme).questions[questionId].choices[0]}></input>
    <div style={styleHexRightButt}></div>
    <div style={styleHexLeftButt}></div>
    <input style={{...styleBarButt,...fontStyle}} onClick={handleClick} type="button" id="2" value={questions.categories.find(category => category.name === selectedTheme).questions[questionId].choices[1]}></input>
    <div style={styleHexRightButt}></div>
    <div style={styleMiniBar}></div>
    </div>
    
    <div style={{marginTop:"25px", display:'flex', alignItems:'center'}}>
      <div style={styleMiniBar}></div>
      <div style={styleHexLeftButt}></div>
    <input style={{...styleBarButt,...fontStyle}} onClick={handleClick} type="button" id="3" value={questions.categories.find(category => category.name === selectedTheme).questions[questionId].choices[2]}></input>
    <div style={styleHexRightButt}></div>
    <div style={styleHexLeftButt}></div>
    <input style={{...styleBarButt,...fontStyle}} onClick={handleClick} type="button" id="4" value={questions.categories.find(category => category.name === selectedTheme).questions[questionId].choices[3]}></input>
    <div style={styleHexRightButt}></div>
    <div style={styleMiniBar}></div>
    </div>
    </div>
    
    <div style={combinedStyleEnd}>
    <p className="text-end-game" style={{ display: winDisplay }}>Gagné ! En effet la bonne réponse est : {questions.categories.find(category => category.name === selectedTheme).questions[questionId].correct_answer}</p>
    <p className="text-end-game" style={{ display: loseDisplay }}>Perdu ! La bonne réponse était : {questions.categories.find(category => category.name === selectedTheme).questions[questionId].correct_answer}</p>
    <input className="button-64" style={{ display: nextQuestion }} onClick={nextQuestionButton} type="button" value="Question suivante"></input>
    </div>
    </div>
)
}
function randomQuestion(data){
  return Math.floor(Math.random() * data.length)
}

function Title(){
  return(<h1 className="text">Quizz veux gagner quelquechose</h1>)
}
 function Buttonsdf(){
   return(<input type="button" id={id} value={value}></input>)
 }
export default App
