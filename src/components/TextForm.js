import React,{useState} from 'react'



export default function TextForm(props) {
  const handleUpClick =()=>{

    // console.log("Uppercase was clicked"+ text);
    let newText=text.toUpperCase();
    setText(newText)
    
  }
  const handleloClick =()=>{

    // console.log("Uppercase was clicked"+ text);
    let newText=text.toLowerCase();
    setText(newText)
    
  }
  const handlelClear =()=>{

    let newText="";
    setText(newText)
    
  }
  const handleOnChange =(event)=>{
    // console.log("on change");
    setText(event.target.value)
  }


  const handlelCopy =()=>{
    let text=document.getElementById("myBox");
   text.select();
    navigator.clipboard.writeText(text.value);
  
  }
  const handlelRemoveSpace =()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
  
  }

    const [text, setText] = useState('');
  return (
    <>
    <div className='container'>
    
        <h1>{props.heading} </h1>

         <div className="mb-3">
      <textarea className="form-control"  value={text}  onChange={handleOnChange}id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert into uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert into lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handlelClear}> Clear Text </button>
      <button className="btn btn-primary mx-2" onClick={handlelCopy}> Copy Text </button>
      <button className="btn btn-primary mx-2" onClick={handlelRemoveSpace}>Remove Extra Space</button>
      </div>
      <div className="container my-5">
        <h2> your text summery</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>Preview</h2>
          <p>{text}</p>
        
      </div>
      </>
    
      
  )
}
