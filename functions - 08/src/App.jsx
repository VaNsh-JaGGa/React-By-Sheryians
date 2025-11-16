
const App = () => {
  const btnClicked = () =>{
    console.log("button clicked");
    
  }

  const mouseEntered = () =>{
    console.log("mouse entered");
  }

  const showingChanges = (val) => {
    // console.log('changing');
    console.log(val);
  }
  return (
    <div>
      <button onMouseEnter={mouseEntered} onClick={btnClicked} >Click here</button>
      <input type="text" placeholder="enter the name" onChange={(elem)=>{console.log(elem);console.log(elem.target);console.log(elem.target.value);
      }} />
      <input type="text" placeholder="hellll" onChange={(elem)=>{showingChanges(elem.target.value)}} />
    </div>

  )
}

export default App
