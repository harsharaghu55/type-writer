import React,{useEffect}from 'react'
import {connect} from 'react-redux'

function Timer({clockRunning,setSeconds,seconds,resetClickHandler}){
    
    useEffect(()=>{
        (seconds>0 && clockRunning) && setTimeout(()=>setSeconds(seconds-1),100)
        if(seconds === 0){
            resetClickHandler();
        }
    },[seconds,clockRunning])

    return(
        <div className="colck">
            <h3>Time Left : {seconds}</h3>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return state
}
const mapDispatchProops = (dispatch)=>{
return {
      setSeconds: (upDateSeconds)=> dispatch({type:"setSeconds",payLoad:upDateSeconds})
    }
}
export default connect(mapStateToProps,mapDispatchProops) (Timer)

