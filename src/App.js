import React, {useState} from 'react'
import './App.css';
//  Projects/Project 1
//import Navbar from './components/Projects/Projects 1/Navbar';
//import TextForm from './components/Projects/Projects 1/TextForm';
//import Alert from './components/Projects/Projects 1/Alert';

//  Exercise/Exercise 1
//import Navbar from './components/Exercise/Exercise 1/Navbar';
//import TextForm from './components/Exercise/Exercise 1/TextForm';

//  practice/Dark Mode
//import Navbar from './components/Practice/1. Dark Mode/Navbar';
//import About from './components/Practice/1. Dark Mode/About';

// Exercise/Exercise 2
import Navbar  from './components/Exercise/Exercise2/Navbar';
import TextForm  from './components/Exercise/Exercise2/TextForm';
import Alert from './components/Exercise/Exercise2/Alert';

/*import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
*/

 

function App() {
   
   
  const [myStyle,setMyStyle] = useState( {
    color:'black',
    backgroundColor:'white'
  });
  const showStyle = () =>{
        if(myStyle.color === 'white'){
         setMyStyle({
          color:'black',
          backgroundColor:'white',
          
         });
         document.body.style.backgroundColor='white';
         showAlert('success','Light Mode Enable');
         document.title = 'React Tools - Light Mode';
        }
        else{
          setMyStyle({
            color:'white',
            backgroundColor:'#361444',
            
           });
           document.body.style.backgroundColor='#361444';
           showAlert('success','Dark Mode Enable');
           document.title = 'React Tools - Dark Mode';
        }
  }
  const [alertText,setAlertText] = useState(null);
  const showAlert = (type,message) =>{
         setAlertText({
          type:type,
           message:message
           });
           setTimeout(() => {
             setAlertText(null)
           }, 2000);
  }
  return (
   
    <>
    <Navbar title='React Tools' aboutTxt="About" showStyle={showStyle} mode={myStyle} />
    <Alert alertText={alertText} />
    <TextForm heading="Enter the text to analyze" mode={myStyle} showAlert={showAlert}/> 

    </>

      
    
  );
}

export default App;
