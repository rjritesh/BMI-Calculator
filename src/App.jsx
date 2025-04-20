import React, { useState } from 'react'
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {

    const heightInMeter = height / 100;
    const bmiValue = (weight / (heightInMeter * heightInMeter)).toFixed(1);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setStatus("You are underweight");
    }
    else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setStatus("You have a normal weight")
    }
    else if (bmiValue >= 25 && bmiValue < 29.9) {
      setStatus("You are overweight");
    }
    else {
      setStatus("You are obese");
    }

  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (!weight || !height) {
      toast.warn("Please enter both the details first!!")

      return;
    }
    calculateBMI();
  
  }

  return (
    <>

      <div className=' h-screen flex justify-center items-center bg-gray-200'>


        <form className='shadow p-10 bg-white rounded ' onSubmit={submitHandler}>
          <h1 className='font-semibold text-2xl mb-8 flex justify-center'>BMI Calculator</h1>

          <label>
            <input className='border rounded  p-2' type="number" placeholder="Weight (kg)"
              value={weight} //yaha bind ho raha hai
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
          <br /><br />

          <label>

            <input
              className='border rounded  p-2'
              type="number"
              placeholder="Height (cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
          <br /><br />



          <div className='flex justify-center items-center flex-col '>

            <button className='bg-purple-200 mt-2 px-4 py-2 w-full rounded font-semibold cursor-pointer  ' type="submit">Submit</button>
            <button className='bg-gray-400 mt-3 mb-4 px-4 py-2 w-full rounded font-semibold cursor-pointer  ' type="button"
              onClick={() => {
                setWeight("")
                setHeight("")
                setBmi(null)
                setStatus("")
                
              }}

            >Reset</button>
            <span className='text-m font-semibold'>Your BMI is : {bmi || "Not calculated yet"}</span>
            <p className='text-xs text-gray-900 m-1'>{status || "Enter your details to calculate your BMI"}</p>
          </div>

        </form>


      </div>

      <ToastContainer position='top-center' autoClose={1000} transition={Slide}></ToastContainer>

    </>
  )
}

export default App