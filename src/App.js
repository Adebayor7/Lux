// import './App.css';
import Do from './Components/PostData';
import FormInput from './Components/FormInput';
import Navbar from './Components/Navbar';
import FooterData from './Components/FooterData';
import PostData from './Components/PostData';
// import {BrowserRouter as Router, Swith, Route } from 'react-router-dom';

import DisplayAppleData from './Components/DisplayAppleData';
import AppleDataInfo from './Components/AppleDataInfo';
import DisplayHpData from './Components/DisplayHpData';
import HpCardDataInfo from './Components/HpCardDataInfo';



function App() {
  return (
    // <Router></Router>
    <div className="App">
      <Navbar />
      <PostData />
      <FormInput />
      <FooterData />
      <DisplayAppleData />
      <AppleDataInfo />
      <FooterData />
      <DisplayHpData />
      <HpCardDataInfo />
      <FooterData />
      <DisplayHpData />
    </div>
    
  );
}

export default App;
