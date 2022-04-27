// import logo from './logo.svg';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import { useState } from 'react';
import Alert from './component/Alert';


// let name = "Aditya"
function App() {
  const [mode, setMode] = useState('light'); //defines dark mode is on or off
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    
  setAlert({
    msg: message,
    type: type
  })
  
  setTimeout(() => {
    setAlert(null);
  }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode enabled", "success")

    }
  }
  return (
   <>
   
<Navbar Title="TextEdits" textAbout="About us" mode={mode} toggleMode={toggleMode}/> 

<Alert alert={alert}/>

<div className="container my-5">
<TextForm showAlert={showAlert} heading="Text to analyis"/>
<button className='btn btn-seondary ' />
</div>
{/* <Navbar  />  */}
{/* <About className="container my-5"  /> */}
   </>
  );
}


export default App;
