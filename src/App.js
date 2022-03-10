import {UseState} from './UseState.js';
import {UseReducer} from './useReducer';
import './App.css';


function App() {
  return (
    <div className="App">
      <UseState
        name ="Use State"
      />
      <UseReducer
        name ="UseReducer"
      />
    </div>
  );
}

export default App;
