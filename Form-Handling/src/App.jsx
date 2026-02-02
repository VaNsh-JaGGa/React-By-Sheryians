// iisme ham jab form ko submit krte hai too pura page reload na hoon iisliye hamne form ko handle kia hai through the prevent default ye hame uski funcitionality ko perform nahi karne deta.

const App = () => {

  const submitHandler = (e) => {
    // e.preventDefault();
    // console.log("Form submitted")
  }

  return (
    <div>

      <form onSubmit={(e)=>{
        console.log(e);
        submitHandler(e)
      }}>
      <input type="text" placeholder="enter your name" />
      <button>Submit</button>
      </form>
      
    </div>
  )
}

export default App
