import React,{useState,useEffect}from 'react'


function Timer(){
    const [seconds,setSeconds] = useState(0)

    function upDateTime(){
        setSeconds(60)
    }
    
    useEffect(()=>{
        seconds > 0 && setTimeout(()=>setSeconds(seconds-1),1000)
    },[seconds])

    return(
        <div className="colck">
            <h3>{seconds}</h3>
            <button onClick={upDateTime}>start Time</button>
        </div>
    )
}

export default Timer