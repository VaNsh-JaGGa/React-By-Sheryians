
const App = () => {

  const SubmitHandler = (e)=>{
    e.preventDefault();
    console.log('form submitted');
  }

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form onSubmit={(e)=>{
        SubmitHandler(e);
      }} className="flex items-start lg:w-1/2 gap-4 flex-col p-10">
         <h1 className="text-3xl font-bold">Add Notes</h1>
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="px-5 w-full font-medium py-2 border-2 outline-none rounded"
          />
          <textarea
            type="text"
            placeholder="Write Details"
            className="px-5 w-full h-32 flex font-medium items-start outline-none py-2 border-2 rounded"

          />

          <button className="bg-white w-full text-black px-5 py-2 rounded">Add Notes</button>
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2jD4jHXqii8nhc6QYUx7CM23J4mLa4ssYw&s" alt="" /> */}
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">
      <h1 className="text-3xl font-bold">Recent Notes</h1>
      <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto">
        <div className="h-50 w-42 rounded-2xl bg-white"></div>
        <div className="h-50 w-42 rounded-2xl bg-white"></div>
        <div className="h-50 w-42 rounded-2xl bg-white"></div>
        <div className="h-50 w-42 rounded-2xl bg-white"></div>
      </div>
      </div>
    </div>
  )
}

export default App
