import { useState } from "react";

const App = () => {

  const [num, setnum] = useState(10)

  const btnClicked = ()=>{
    console.log("button clicked");
    //prints 10 on console
    console.log(num);
    setnum(20);
    // * setnum(num) -- same value dubara dalunga too re render ni krega react
    // * ye 1 step piche chalta hai
    // prints 10 on console still beacause the setnum is a ashynchronous in nature
    console.log(num);
    
  }

  return (
    <div>
    <h1>{num}</h1>
    <button onClick={()=>{
      btnClicked();
    }}>click me</button>
    </div>
  )
}

export default App
