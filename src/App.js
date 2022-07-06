import './App.css';
import Homepage from './Components/Homepage';
import DATASET from './data.json'


function App() {  
  return (
    <div className="App">
      <Homepage data={DATASET}/>
    </div>
  );
}

export default App;
