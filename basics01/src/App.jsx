import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [counter, setCounter] = useState(5)

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
    console.log("Value added:", counter + 1)
  }

  const delValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
    console.log("Value deleted:", counter - 1)
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-amber-700 p-3 text-white">
        Hello Suttabaj
      </h1>
      <h2 className="text-xl mt-4">Counter Value: {counter}</h2>

      <div id='lalu' className="mt-4 space-x-4">
        <button
          onClick={addValue}  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>

        <button
          onClick={delValue}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
      
    </>
  );
}

export default App
