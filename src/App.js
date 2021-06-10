import React,{useState,useEffect,useRef} from 'react'
import Timer from './components/timer.js'

function App() {

  const [para,setPara] = useState("")
  const [count,setCount] = useState(0);
  const [falseIndex,setfalseIndex] = useState(-1)
  const [redIndex,setRedIndex] = useState([])
  const typeingText = useRef(null)

  function resetClickHandler(){
    setCount(0)
    setfalseIndex(-1)
    setRedIndex([])
    typeingText.current.focus()
  }

  function keyPressed(event){
    event.preventDefault()
    if(event.key === para.split("")[count]){
      setCount(count+1)
    }else{
      setRedIndex([...redIndex,count])
      console.log(redIndex);
      setfalseIndex(count)
    }
        
    if(count === para.length-1){
      resetClickHandler()
    }
  }
  

  useEffect(()=>{
    setPara("this is the random para shower are test your typeing skill and speed int this area")
    setCount(0)
    console.log(typeingText.current.events)
  },[])

  return (
    <div className="App">
      <Timer/>
      <h2>speed:<span>0</span></h2>
      <div className="randomParaShower" tabIndex="-1" onKeyPress={keyPressed} ref={typeingText}>
        {para && para.split("").map((letter,index)=><span className={index===count ? "letterToType focused":"letterToType"} style={{color: (redIndex.includes(index) || index===falseIndex) ? "red":"black"}}>{letter}</span>)}
      </div>
      <button onClick={resetClickHandler}>
        reset
      </button>
      <button>
        start
      </button>
    </div>
  );
}

export default App;
