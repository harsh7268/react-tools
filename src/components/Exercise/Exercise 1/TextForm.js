import React, {useState} from 'react'


export default function TextForm(props) {

  // Convert to UpperCase
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }

  // Convert to LowerCase  
    const handleLowClick = () =>{
      let newText = text.toLowerCase();
      setText(newText);
  }
  
// Copy text in clipboard
const handleCopyClick = () =>{
  let textBox = document.getElementById('textBox');
  textBox.select();
  navigator.clipboard.writeText(textBox.value)
}

  // Clear all text
  const handleClearClick = () =>{
    let newText = '';
    setText(newText);
  }

// Reverse the text
const handleReverseClick = () =>{
   let newText = text.split('').reverse().join('');
   setText(newText);
}

// Remove all extra spaces
const handleExtraSpaceClick = () =>{
  let newText = text.split(/[ ]+/);
setText(newText.join(' '));
}

  // change of textarea value when focus
    const handleOnChange = (event) =>{
       // console.log('handle on change');
        setText(event.target.value)

    }
const [text, setText] = useState('');
//setText("new text"); // Correct way to change the state
//text = "new text";   // Wrong Way to change the state

  return (
<div className='container'>
 <h1 className='my-3'>{props.heading} </h1>
<div className="mb-3">
  <textarea className="form-control" onChange={handleOnChange} value={text} id="textBox" rows="5"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert To UppperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
<button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy</button>
<button className="btn btn-primary mx-2" onClick={handleReverseClick}>Reverse</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaceClick}>Remove Extra Spaces</button>
<p className="my-3">{text.split(' ').length} words , {text.length} characters</p>
<p >{0.008*text.split(' ').length} minutes read</p>
<h2 className="my-2">Preview</h2>
<p>{text===''?'Please enter the text above box':text}</p>
</div>
  )
}
