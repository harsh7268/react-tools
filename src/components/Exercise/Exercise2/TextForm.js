import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('success','Convert to upperCase')
    }
    const handleLowClick = () =>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert('success','Convert to lowerCase')
  }
  const handleClearClick = () =>{
    let newText = '';
    setText(newText);
    props.showAlert('success','Clear Text');
}
    const handleOnChange = (event) =>{
       // console.log('handle on change');
        setText(event.target.value)
    }
const [text, setText] = useState('');
//setText("new text"); // Correct way to change the state
//text = "new text";   // Wrong Way to change the state

  return (
<div className='container' style={props.mode}>
 <h1 className='my-3'>{props.heading} </h1>
<div className="mb-3">
  <textarea style={props.mode} className="form-control" onChange={handleOnChange} value={text} id="textBox" rows="5"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert To UppperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
<p className="my-3">{text.split(' ').length} words , {text.length} characters</p>
<p >{0.008*text.split(' ').length} minutes read</p>
<h2 className="my-2">Preview</h2>
<p>{text===''?'Please enter the text above box':text}</p>
</div>
  )
}
