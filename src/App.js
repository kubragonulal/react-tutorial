import logo from './logo.svg';
import User from './components/User';
import Navbar from "./components/Navbar";
import './App.css';

function App() {
  return (

    <div className="container">
      <Navbar title = "User App "/>
      <hr/>
      <User name= "Kübra Gönülal" department = "Yazılım" salary= "50000"/>
      <User name= "Erdem Yılmaz"  salary= "60000"/>
    </div>
   
  );
}

export default App;
