
import React,{useState,useEffect} from 'react'

function App() {

  function keyPressed(event){
    event.preventDefault()
    if(event.key === para.split("")[count]){
      setCount(count+1)
    }
        
    if(count === para.length){
      setCount(0);
    }
  }
  const [para,setPara] = useState("")
  const [count,setCount] = useState(0);

  useEffect(()=>{
    setPara("this is the random para shower are test your typeing skill and speed int this area")
    setCount(0)
  },[])
  return (
    <div className="App">
      <div className="randomParaShower" tabIndex="1" onKeyPress={keyPressed}>
        {para && para.split("").map((letter,index)=><span className={index===count ? "letterToType focused":"letterToType"}>{letter}</span>)}
      </div>
      <button>
        reset
      </button>
      <button>
        start
      </button>
    </div>
  );
}

export default App;
