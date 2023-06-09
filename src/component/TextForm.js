import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("UpperCase Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("UPEERCASE Clicked!","success");
  };
  const handleLwClick = () => {
    console.log("Lowerase Clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("LOWERCASE Clicked!","success");
  };
  const handleClearClick = (event) => {
    let newText ='';
    setText(newText);
    props.showAlert("CLear CLicked!","success");
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  
  const [text, setText] = useState("Enter text Value");
  
  return (
    <> 
    <div className="container">
      <div className={`mb-3 text-${props.mode === `dark`?`light`:`dark`}`}> 
        <h1>{props.heading}</h1>
        <textarea className={`form-control text-${props.mode === `dark`?`light`:`dark`}`} id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === `dark`?`#5f5a7d`:`#d1c2ff`}}></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}> Click For Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLwClick}> Click For Lowercase </button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}> Clear Text </button>
    </div>
    <div className={`container my-3 text-${props.mode === `dark`?`light`:`dark`}`}>
      <h2>Your text Summary</h2>
      <p>word : {text.split(" ").length} & charactar : {text.length}</p>
      <p>{ 0.008 * text.split(" ").length } Minutes to Read</p>
      <h3>Preview</h3>  
      <p>{text.length>0 ?text:"Enter something for preview"}</p>
    </div>
    </>
  );
}
