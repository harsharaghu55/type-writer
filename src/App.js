import React,{useEffect,useRef} from 'react'
import Timer from './components/timer.js'
import {connect} from "react-redux"

function App(props) {
  const typeingText = useRef(null)

  function resetClickHandler(){
    props.setCount(0)
    props.setIndexsOfwrongtype([])
    typeingText.current.focus()
    props.setClock(false);
  }
  function startHandler(){
    props.setClock(true);
  }

  function keyPressed(event){
    event.preventDefault()
    if(event.key === props.para.split("")[props.count]){
      props.setCount(props.count+1)
      // if(event.key === " ") setNoWords(noWords+1);
    }else{
      // setRedIndex([...redIndex,count])
      props.setIndexsOfwrongtype([...props.indexsOfwrongtype,props.count])
    }  
    if(props.count === props.para.length-1){
      resetClickHandler()
    }
  }
  
  useEffect(()=>{
    props.setPara("this is the random para shower, you can test your typeing skill and increase your typeing speed here")
    props.setCount(0)
    typeingText.current.focus()
    return 
  },[])

  return (
    <div className="App">
      <Timer/>
      <h2>speed:<span>0</span></h2>
      <div className="randomParaShower" tabIndex="-1" onKeyPress={keyPressed} ref={typeingText}>
        {props.para && props.para.split("").map((letter,index)=><span className={index===props.count ? "letterToType focused":"letterToType"} style={{color: props.indexsOfwrongtype.includes(index)  ? "red":"black"}}>{letter}</span>)}
      </div>
      <button onClick={resetClickHandler}>
        reset
      </button>
      <button onClick={startHandler}>
        start
      </button>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return state
}

const mapDispatchProops = (dispatch) =>{
  return {
    setCount : (newCount)=>dispatch({type:"setCount",payLoad:newCount}),
    setPara : (newPara)=>dispatch({type:"setPara",payLoad:newPara}),
    setIndexsOfwrongtype:(newIndex)=>dispatch({type:"setIndexsOfwrongtype",payLoad:newIndex}),
    setClock:(clockCodition)=>dispatch({type:"setClock",payLoad:clockCodition})
  }
}

export default connect(mapStateToProps,mapDispatchProops)(App);


// at login (userID + password) ==> authenticate and generate a token using secret key --> genereate JWT token -> return back to client along with repsonse.
// Next time with client request, JWT token send along with client request to Server, This token get decrypted using Secret key and check user name and password is correct or not. If matches then authentication successful and response to client. else unauthencated error to client
