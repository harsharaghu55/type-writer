import React,{useState,useEffect}from 'react'
import {connect} from 'react-redux'

function Timer(props){
    const [seconds,setSeconds] = useState(60)

    
    
    useEffect(()=>{
        props.clockRunning && setTimeout(()=>setSeconds(seconds-1),1000)
    },[seconds,props])

    return(
        <div className="colck">
            <h3>{seconds}</h3>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return state
}
const mapDispatchProops = (dispatch)=>{
return {
        
    }
}
export default connect(mapStateToProps,mapDispatchProops) (Timer)

// <button onClick={upDateTime}>start Time</button>