import React from "react"
import "./status.css"
export let Statu =(props)=>{
    return(
        <div className="status">
<p>{props.name}</p>
<p>{props.age}</p>
<p className="invite">invite</p>
        </div>
    )
}