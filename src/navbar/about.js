import React ,{createRef}from "react"
import css from './about.css'

class about extends React.Component{
 constructor(props){
 super(props)
     this.fedi = createRef()
 }
  render(){
   console.log("this is render run")
     return(
        <div className="main">
           <h1 ref={this.fedi}>fedi grichi</h1>
        </div>
       )
}
Click(){
   this.fedi.current.onclick= ()=>{

      this.fedi.current.class ="fedi"
   }
}
componentDidMount(){
 
   this.fedi.current.onclick = this.Click;
   console.log("after render")

}

}
export default about