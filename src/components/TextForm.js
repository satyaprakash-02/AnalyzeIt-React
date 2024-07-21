import React, { useState } from 'react'

export default function TextForm(props) {
    const[text,setText]=useState("");
    const handleUpEvent=(event)=>{
        event.preventDefault();
        let newText=text.toLocaleUpperCase();
        setText(newText);
        props.showAlert("! Changed to UpperCase","success");
    }
    const handleLowEvent=(event)=>{
        event.preventDefault();
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("! Changed to LowerCase","success");
    }
    const handleClearText=(event)=>{
        event.preventDefault();
        let newText="";
        setText(newText);
        props.showAlert("! Text Cleared","success");
    }
    const copyText=(event)=>{
        var text=document.getElementById("inputbox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("! Text copied to Clipboard...","success");
    }

    const handleOnChange=(event)=>{
        console.log("OnChange is clicked");
        setText(event.target.value);
    }

    // text is used to defind the old predefined text and setText is used as a function to change the text // react hooks is used
  return (
    <>
    <div className="container1">
      <form>
  <div className="mb-3">
    <label htmlFor="myBox" className="form-label"><h1>{props.heading}</h1></label>
    <textarea type="text" className="form-control" id="inputbox" value={text} onChange={handleOnChange} rows="6"/>
  </div>
  </form>
  <div className="control">
    <button type="submit" className="btn btn-primary" onClick={handleUpEvent} >Upper Case</button>
    <button type="submit" className="btn btn-primary" onClick={handleLowEvent} >Lower Case</button>
    <button type="submit" className="btn btn-primary" onClick={handleClearText} >Clear Text</button>
    <button type="submit" className="btn btn-primary" onClick={copyText} >Copy Text</button>
  </div>
  

    </div>
    <div className="container2">
      <div className="heading">
      <h3>Your text summary !</h3>
      </div>
      <p id="summary">{text.trim().split(/\s+/).filter(word => word.length > 0).length} words and {text.length} characters.</p>
    </div>
    <div className="preview">
      <h4>Preview:</h4>
      <p>{text}</p>
    </div>
    </>
  )
}
