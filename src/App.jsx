import {useEffect, useState } from "react";
import Test from "./components/Test";

function App() {
  const [state,setState]= useState("");
  const [isShow,setIsShow]= useState(false);

  const changeInpValue = e =>{
    setState(e.target.value);
  }
 useEffect(()=>{
  console.log("app useEffect"); 
  const timeOuteId = setTimeout(()=>{
    console.log("fech");
  },300)
    return ()=>{
      clearTimeout(timeOuteId)
    }
 },[state]);
 console.log("app body");
  return (
    <div className="App">
      <button onClick={()=> setIsShow(!isShowS)}>show/hide</button>
      <input type="text"value={state} onChange={changeInpValue}/>
      < Test/>
    </div>
  );
}
export default App;
