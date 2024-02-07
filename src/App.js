import './App.css';
import { useRef, useState } from 'react';
function App() {
  var [divs, setdivs] = useState([]);
  const valueRef = useRef(null);

  const Add = (task) => {
    console.log(task)
    const nouvelleDiv = <div className='container' key={divs.length}>
      <h3 className=''>Task:</h3>
      <h4>{task}</h4>
    </div>;
    setdivs([...divs, nouvelleDiv])
  }
  return (
    <div className="Appl">
      <h1 className='title'>My to do list App</h1>
      <div class="row">
        <div class="col">
          <input ref={valueRef} type="text" class="styled-input" placeholder="First name" aria-label="First name"></input>
          <button onClick={() => { Add(valueRef.current.value) }} className='styled-button'>Add</button>
        </div>
      </div>
      {divs.map((div, index) => (
        <div key={index}>{div}</div>
      ))}

    </div>
  );
}


export default App;
