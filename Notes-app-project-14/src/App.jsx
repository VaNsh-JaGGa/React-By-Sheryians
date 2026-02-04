import { useState } from "react";

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    console.log(task);
    // console.log(title);
    // console.log(details);
    setTitle('');
    setDetails('');
  }


  return (
    <div className="h-screen bg-black lg:flex text-white ">
      <form onSubmit={(e) => {
        submitHandler(e);
      }} className="flex p-10  flex-col gap-5 lg:w-1/2 items-start">

        <h1 className="text-3xl font-bold">Add Notes</h1>
        {/* // phela input FOR HEADING */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        {/* DETAILED VALA INPUT  */}
        <textarea
          type="text"
          placeholder="Write Details"
          className="px-5 w-full font-medium outline-none py-2 flex items-start border-2 rounded h-35"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button
          className="bg-white active:scale-95 outline-none w-full text-black px-5 py-2 rounded">
          Add Notes
        </button>
        {/* <img className="h-65" src="https://image.winudf.com/v2/image1/MjE5MzI3MTdfMTY4MjE0MjM4OV8wNTk/screen-0.png?fakeurl=1&type=png" alt="" /> */}

      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10">

        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-6 mt-5 h-full overflow-auto">

          <div className="h-52 w-47 rounded-2xl bg-white"></div>
          <div className="h-52 w-47 rounded-2xl bg-white"></div>
          <div className="h-52 w-47 rounded-2xl bg-white"></div>

        </div>
      </div>
    </div>
  )
}

export default App
