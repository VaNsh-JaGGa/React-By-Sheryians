import { useState } from "react"


const App = () => {

const [num, setnum] = useState(0)

const increaseNum = () => {
  setnum(num + 1);
}

const decreaseNum = () => {
  setnum(num - 1);
}

const jumpBy5 = () =>{
  setnum(num+5);
}
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={()=>{
          increaseNum();
      }}>Increase</button>
      <button onClick={()=>{
        decreaseNum();
      }}>Decrease</button><br />
      <button className="one" onClick={()=>{
        jumpBy5();
      }}>Jump by 5</button>
    </div>
  )
}

export default App
