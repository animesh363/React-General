import logo from './logo.svg';
import './App.css';

function App() {

  const title ="Welcome To my profile ";
  const like =50;
  const link= "https://www.google.com/";



  return (
    <div className="App">

      <div className="container">
        <h1>Helloo.. Animesh Thakur This side</h1>
        <h2>{title} </h2>
        <h3>Likes {like} </h3>


        <p>  1000</p>
        <p>{"Hello coders "} </p>
        <p> This is Rndom function it can be written is brsces or outside {Math.floor(Math.random(10,20) * 10 +1) } </p>
        {/* <a href="https://www.google.com/">Visit Site</a> */}

        <a href={link} >Visit Site</a> bo

      </div>

    </div>
  );
}

export default App;
