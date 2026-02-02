// iisme ham jab form ko submit krte hai too pura page reload na hoon iisliye hamne form ko handle kia hai through the prevent default ye hame uski funcitionality ko perform nahi karne deta.
// form handling -- page reload mahi hona chahiye
// two way binding -- usestate ka use karke value ko dena input mei

import { useState } from "react";


// steps of using two way binding 
// 1. usestate - import
// 2. usestatesnippet -- enter 
// 3. put the title variable of react in value keyword of form
// additional imp -> onChange provides the current value
// 4. now use the onchange event and through settitle change the value of title everytime
// 5. submit the title variable thorugh submit button

// 3. value defines the current value of the form
const App = () => {

  const [title, settitle] = useState("")


  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted by ",title);
  }


  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input
          type="text"
          placeholder="enter your name"
          value={title}

          onChange={(e)=>{
          console.log("inputinnggg.....");
          settitle(e.target.value);
        }}



          //jab bhi ap kuch change karte hai too apki uski current value show hoti hai
        // onChange={(e)=>{
        //   // console.log("inputinnggg.....");
        //   console.log(e.target.value);
        // }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
