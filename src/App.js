import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
// import About from './component/About';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert =(message, type)=>{
    setAlert({
      msg : message,
      type : type
    },
    setTimeout(()=>{
      setAlert(null);
    },1500)
    )
  }
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#040132f5';
      showAlert("DARK MODE ENABLE!","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("LIGHT MODE ENABLE!","success");
    }
  }
  return (
    <>
  {/* <Router> */}
     <Navbar title="HariKrishna" about='About Us' mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
        <div className="container">
      {/* <Switch>
          <Route exact path="/about" > */}
            {/* <About/> */}
          {/* </Route>
          <Route exact path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter Text" mode={mode}/> 
          {/* </Route>
      </Switch> */}
        </div>
  {/* </Router> */}
    </>
  );
}
 
export default App;
