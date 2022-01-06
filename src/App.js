import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {getName, loadUser,getArr} from "./features/currentUser/currentUserSlice";
import {actionCreator1} from "./features/currentUser/currentUserSlice";
import {useEffect} from "react";
import {addCount, getCount, removeCount} from "./features/countUser/countUser";
import {randomNumber} from "./features/countUser/countUser";

function App() {
    const value=useSelector(getName)
    const arr=useSelector(getArr)
    const count=useSelector(getCount)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(loadUser())
    },[])

    return (
    <div className="App">
      <header className="App-header">
          <h1>{value}</h1>
          <input type="text" value={value} onChange={(e)=> {
              dispatch(actionCreator1(e.target.value))
          }}/>

      </header>
        <br/>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(addCount())}>add</button>
        <button onClick={()=>dispatch(removeCount())}>remove</button>
        <button onClick={()=>dispatch(randomNumber())}>Add Random Number</button>
        <h1>{arr}</h1>
    </div>
  );
}

export default App;
