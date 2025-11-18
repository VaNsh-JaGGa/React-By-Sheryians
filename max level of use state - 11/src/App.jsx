import { useState } from "react";

const App = () => {

  // const [num, setnum] = useState(10)
  const [num, setnum] = useState({user:"vansh",age:20})

  const btnClicked = ()=>{


    const newNum = {...num};
    console.log(newNum);
    newNum.user="jagga";
    newNum.age=24;
    setnum(newNum);
    setnum(prev=>({...prev,age:30}));
    // console.log("button clicked");
    //prints 10 on console
    // console.log(num);
    // * setnum(num) -- same value dubara dalunga too re render ni krega react
    // * ye 1 step piche chalta hai
    // prints 10 on console still beacause the setnum is a ashynchronous in nature
    // console.log(num);
  }

  return (
    <div>

    <h1 onClick={()=>{
      btnClicked();
    }}>{num.user}</h1>
    <h1>{num.age}</h1>
    
    {/* <h1>{num}</h1>
    <button onClick={()=>{
      btnClicked();
    }}>click me</button> */}

    </div>
  )
}

export default App
