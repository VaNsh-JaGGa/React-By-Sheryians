import { useState } from "react"


const App = () => {

  //conclude of 1 ---- bhaiya agar website me changes ko show karna hai use state ka use krlon na
  // -----1
  // let a=20

  // const changeA = ()=>{
  //   console.log(a);
  //   a=30;
  //   console.log(a);
  // }

  // step 1 -- usestate enter karo react vala libraries import karane k lie
  // step 2 -- usess type karo usestatesnippet ko enetrr karo or use state ka syntax aajega
  // step 3 -- first value of array is read , second one is write jisme ap react ko batate hai ki bhai ye change kardon phir voh pre build functions ki help se voh changes kar deta hai
  usess
  const [a, setA] = useState(20)
  const changeA = () =>{
    setA(40);
  }
  return (
    <div>
      {/* ----1 */}
      {/* <h1>{a}</h1>
      <button onClick={()=>{changeA()}}>click Me</button> */}
      <h1 onClick={()=>{changeA()}}>the value of a is {a}</h1>
    </div>
  )
}

export default App
