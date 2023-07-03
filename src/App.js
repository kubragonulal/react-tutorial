import logo from './logo.svg';
import './App.css';

function App() {
  const test = 34;
  const isAuth= true;
  return (

    <div className="App">
      <h4>{1+1}</h4>
      <h4>{"Merhaba Dünya".toUpperCase()}</h4>
      <h4>{new Date().getHours()}</h4>
      <h4>{test}</h4>
      <div>
      {
      isAuth ? <h4>Kullanıcı girişi yapıldı</h4>
      : null
    }
      </div>
    </div>
   
  );
}

export default App;
