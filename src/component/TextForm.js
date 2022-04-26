import React, {useState} from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
    const ChangetoUppercase = () =>{
        // console.log("text converted to Uppercase"+text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    
    const ChangetoLowercase = () =>{
        // console.log("text converted to LowerCase"+text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const  ClrText = () =>{
        // console.log("text converted to LowerCase"+text);
        let newText = " ";
        setText(newText)
    }
    const  CopyText = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value) ;       
    }
    const  RemoveSpace = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
         
    }
    // const showDropdown = () =>{
      
        
    // }
    const handleOnchange = (event) =>{
        console.log("handleOnchange");
        setText(event.target.value)
    }
    const [text, setText] = useState(' ');
    // setText("Sometimes All i think about is you");
  return (
      <>
    <div className='container'style={{color: props.mode==='dark'?'white':'#042743'}} >
        <h1  style={{color: 'Orange'}}>{props.heading}</h1>
<div className="mb-3">
  {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Text</label> */}
  <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
</div>

<button className="btn btn-primary mx-1" onClick={ChangetoUppercase}>Convert Uppercase</button>
<button className="btn btn-primary mx-1" onClick={ChangetoLowercase}>Convert Lowercase</button>
<button className="btn btn-primary mx-1" onClick={ClrText}>Clear Text</button>
<button className="btn btn-primary mx-1" onClick={CopyText}>Copy Text</button>
<button className="btn btn-primary mx-1" onClick={RemoveSpace}>Remove extra Space</button>

{/* ***************************************************************************************************************************************************************** */}
<div className="dropdown">
  <a className="btn btn-secondary dropdown-toggle my-3 mx-1" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>

  <ul className="dropdown-menu " aria-labelledby="dropdownMenuLink">
    <li><button className="dropdown-item" >Another action</button></li>
    <li><button className="dropdown-item" >Something else here</button></li>
    <li><button className="dropdown-item" >Action</button></li>
  </ul>
</div>
{/* ***************************************************************************************************************************************************************** */}

</div>
    <div className="container my-5" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2 style={{color: 'Orange'}}>Your Text Summary</h2>
        <p style={{color: "green"}}> {text.split(" ").length} words and {text.length} characters</p>
        <p style={{color: "green"}}>
           No. of minutes required to read the given text {0.008 * text.split(" ").length} 
        </p>
        <h2 style={{color: 'Orange'}}>Preview </h2>
        <p style={{color: "green"}}> {text} </p>

    </div>
    </>
    
  )
}
