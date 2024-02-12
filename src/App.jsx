import { useState } from "react";
import Display from "./components/Display";
import BtnContainer from "./components/BtnContainer";
function App() {

  let [calVal, setCalVal] = useState("");
  
  const onBtnClick = (e) => {
    let btnVal = e.target.innerText;
    try {
      if (btnVal === 'c') {
        setCalVal('')
      } else if (btnVal === '=') {
        let result = eval(calVal);
        setCalVal(result)
      } else {
        let newDisplayValue = calVal + btnVal;
        setCalVal(newDisplayValue);
      }
    }
    catch (error) {
      setCalVal("")
      alert("Error")
    }
  };


  return (
    <center className="bg-black text-white py-5">
      <header>
        <h1 className='text-5xl'>Calculator</h1>
      </header>
      <Display displayValue={calVal}></Display>
      <BtnContainer onBtnClick={onBtnClick}></BtnContainer>

    </center>
  )
}

export default App;