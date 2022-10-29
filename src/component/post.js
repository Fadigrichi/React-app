import React ,{ useState } from "react"
import {Statu} from "./status"
import "./posts.css"
export const Post =()=>{
  let [data,setdata] = useState([{score:23,name:"Fedi",age:22},{score:246,name:"Imen",age:23}])
const  status =data.map((el)=>(
<Statu Score={el.score} name={el.name} age={el.age} />
))
return(
  <div className="post">
{status}
  </div>
)
}

