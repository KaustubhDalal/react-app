import React, { useState } from 'react'

export default function TextForm(props) {
 const handleUpClick = () =>{
  let newText = Text.toUpperCase();
  setText(newText)
 }

 const handleLowClick = () =>{
  let newText = Text.toLowerCase();
  setText(newText)
 }
 const handleOnChange = (event) => {
   setText(event.target.value)
 }

 const clearText = (event) => {
  setText("")
}

  const handleCopy = () =>{
    var text1 = document.getElementById('myBox');
    text1.select();
    navigator.clipboard.writeText(text1.value);
  }
  const handleExtraSpaces = () =>{
    let newText = Text.replace(/\s{2,}/g, ' ').trim();
    setText(newText)
  }
 const[Text,setText] = useState("");
  return (
   <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={Text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppecase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className='container'>
      <h2>Your Text Summary</h2>
      <p> {(Text === "")?Text.split(" ").length-1:Text.split(" ").length} words {Text.length} characters</p>
      <p> {0.008*Text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{Text}</p>
    </div>
    </>
  )
}
