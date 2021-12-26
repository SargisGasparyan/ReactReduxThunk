import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {getName} from "./features/currentUser/currentUserSlice";
import {actionCreator1} from "./features/currentUser/currentUserSlice";

function App() {
    const value=useSelector(getName)
    const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
          <h1>{value}</h1>
          <input type="text" value={value} onChange={(e)=> {
              dispatch(actionCreator1(e.target.value))
          }}/>

      </header>
    </div>
  );
}

export default App;
