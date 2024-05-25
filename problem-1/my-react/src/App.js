import React, { useState } from 'react';
//import axios from 'axios';

const App = () => {
  const [prevState, setPrevState] = useState([]);
  const [currState, setCurrState] = useState([]);
  const [fetchedNumbers, setFetchedNumbers] = useState([]);
  const [avg, setAvg] = useState(0);

  const fetchNumbers = async (numberId) => {
    try {
      const response = await fetch("http://localhost:9876/numbers/${numberId}");
      const data = response.data;
      setPrevState(data.windowPrevState);
      setCurrState(data.windowCurrState);
      setFetchedNumbers(data.numbers);
      setAvg(data.avg);
    } catch (error) {
      console.error('Error fetching numbers:', error);
    }
  };

  return (
    <div className="App">
      <h1>Average Calculator</h1>
      <button onClick={() => fetchNumbers('p')}>Fetch Prime Numbers</button>
      <button onClick={() => fetchNumbers('f')}>Fetch Fibonacci Numbers</button>
      <button onClick={() => fetchNumbers('e')}>Fetch Even Numbers</button>
      <button onClick={() => fetchNumbers('r')}>Fetch Random Numbers</button>

      <div>
        <h2>Previous State</h2>
        <pre>{JSON.stringify(prevState, null, 2)}</pre>
      </div>

      <div>
        <h2>Current State</h2>
        <pre>{JSON.stringify(currState, null, 2)}</pre>
      </div>

      <div>
        <h2>Fetched Numbers</h2>
        <pre>{JSON.stringify(fetchedNumbers, null, 2)}</pre>
      </div>

      <div>
        <h2>Average</h2>
        <pre>{avg}</pre>
      </div>
    </div>
  );
};

export default App;