import React,{useEffect,useRef, useState} from 'react'
import Timer from './components/timer.js'
import {connect} from "react-redux"
import radomparagraph from "random-paragraph"
import {GiKeyboard} from "react-icons/gi"

function App({para,count,indexsOfwrongtype,setClock,setIndexsOfwrongtype,setPara,setCount,seconds,setSeconds}) {

      const typingText = useRef(null)
      const [speed,setSpeed] = useState(0)
      const [noWords,setNoWords] = useState(0)
      const [errors,setErrors] = useState(0)

      useEffect(()=>{
        setPara(radomparagraph())
        setCount(0)
        typingText.current.focus() 
      },[])

      function resetClickHandler(){
        var errorSet = new Set(indexsOfwrongtype)
        console.log(errorSet)
        setCount(0)
        setErrors(errorSet.size)
        setIndexsOfwrongtype([])
        setClock(false);
        setSpeed((noWords/(60-seconds))*60)
        setSeconds(60)
        setNoWords(0)
        setPara(radomparagraph())
        typingText.current.focus()
      }

      function keyPressed(event){
        event.preventDefault()
        if(event.key === para.split("")[count]){
         setCount(count+1)
         if(event.key === " "){
          setNoWords(noWords+1)
        }
        }else{
          setIndexsOfwrongtype([...indexsOfwrongtype,count])
        }  
        if(count === para.length-1){
          resetClickHandler()
        }
        setClock(true)
      }

      function colorChangeHandler(index){
        if(indexsOfwrongtype.includes(index))  return "red"
        else return "black"
      }

      function classNameHandler(index){
        if(index === count) return "letterToType focused"
        else return "letterToType"
      }
      
      return (
        <div className="App">
            <div className="headder">
              <GiKeyboard size="2X"/>
            </div>
            <div className="typingAreaContainer">
              <div className="resultPanel">
                  <Timer resetClickHandler={resetClickHandler}/>
                  <h3>Errors:{errors}</h3>
                  <h3>speed:<span>{speed && speed}</span></h3>
              </div>
              <div className="randomParaShower" tabIndex="-1" onKeyPress={keyPressed} ref={typingText}>
                {para && para.split("").map((letter,index)=>{
                  return <span className={classNameHandler(index)} style={{color:colorChangeHandler(index)}}>{letter}</span>
                })}
              </div>
              <button onClick={resetClickHandler} className="resetButton">
                Reset
              </button>
            </div>
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
        setClock:(clockCodition)=>dispatch({type:"setClock",payLoad:clockCodition}),
        setSeconds: (upDateSeconds)=> dispatch({type:"setSeconds",payLoad:upDateSeconds})
      }
}

export default connect(mapStateToProps,mapDispatchProops)(App);

