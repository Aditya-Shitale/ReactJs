// import logo from './logo.svg';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import { useState } from 'react';


// let name = "Aditya"
function App() {
  const [mode, setMode] = useState('light'); //defines dark mode is on or off

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
   <>
   
<Navbar Title="TextEdits" textAbout="About us" mode={mode} toggleMode={toggleMode}/> 
<div className="container my-5">
<TextForm heading="Text to analyis"/>
<button className='btn btn-seondary ' />
</div>
{/* <Navbar  />  */}
{/* <About className="container my-5"  /> */}
   </>
  );
}


export default App;
