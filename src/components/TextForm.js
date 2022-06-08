import React, {useState} from 'react'



export default function TextForm(props) {
  const handleUpclick = ()=>{
    //console.log("Uppercase Was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }

  const handleLbclick = ()=>{
    //console.log("Uppercase Was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  }

  const handleClearclick = ()=>{
    //console.log("Uppercase Was clicked" + text);
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared", "success");
  }

  const handleOnChange = (event)=>{
   // console.log("on change");
    setText(event.target.value);
    
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces", "success");
  }

  const handlecopy = () =>{    
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value); 
    props.showAlert("Copied to Clipboard", "success");
  }


    const [text, setText] = useState('');
    //setText("New Text");
    
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'#042743'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Upercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLbclick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearclick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
       
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1> Your text summar</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minuter to read</p>
      <h2>Priview</h2>
      <p>{text.length>0?text:"Enter somthing in the above textbox preview it here"}</p>

    </div>
    </>
  )
}
