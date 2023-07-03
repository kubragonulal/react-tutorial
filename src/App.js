import logo from './logo.svg';
import User from './components/User';
import Navbar from "./components/Navbar";
import './App.css';

function App() {
  const test = 34;
  const isAuth= true;
  return (

    <div className="container">
      <Navbar title = "User App Title"/>
      <hr/>
      <User name= "Kübra Gönülal" department = "Yazılım" salary= "50000"/>
      <User name= "Erdem Yılmaz" department = "Yazılım" salary= "60000"/>
    </div>
   
  );
}

export default App;
