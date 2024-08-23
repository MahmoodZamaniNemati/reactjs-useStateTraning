import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // 1
  const [age, setAge] = useState(0);
  // 2
  const [inputValue, setinputValue] = useState('');
  const handelInputChange = (event) => {
    setinputValue(event.target.value)
  }
  // 3
  const [showText, setShowText] = useState(true);
  const toggleTextShow = () => {
    setShowText(!showText);
  }
  // 4
  const [colorText, setColorText] = useState('blue');
  // training
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setAge(age - 1)} className=''>Decrease Age</button>
      <h1>{age}</h1>
      <button onClick={() => setAge(age + 1)} className=''>Increase Age</button>
      <hr />
      <h2>{inputValue}</h2>
      <input type='text' onChange={handelInputChange} />
      <hr />
      <button onClick={toggleTextShow}>toggleText</button>
      {showText && <h1>MahmoodZamaniNemati</h1>}
      <hr />
      <button onClick={() => setColorText(colorText === 'blue' ? 'red' : 'blue')}>Change Color</button>
      <h1 style={{ color: colorText }}>MahmoodZamaniNemati</h1>
      <hr />
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Set To 0</button>
    </div>
  );
}

export default App;
