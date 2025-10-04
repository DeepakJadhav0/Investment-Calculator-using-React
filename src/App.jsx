import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result"

function App() {
      const [userInput , setuserInput] = useState({
        initialInvestment : 10000,
        annualInvestment : 1200,
        expectedReturn : 6,
        duration : 10,
    })

    let isInputValid = userInput.duration >= 1

    function handelInputChange(inputIdentifier , newValue ){
        setuserInput((prevUserInpur) => {
            return {
                ...prevUserInpur,
                [inputIdentifier]: +newValue
            }
        })
    }

  return (
    <>
    <Header/>
    <UserInput userInput={userInput} handelInputChange={handelInputChange}/>
    {isInputValid ?   <Result input={userInput}/> : <p className="center"> Please Enter Duration Greater Than Zero </p>}
  
    </>
  )
}

export default App
