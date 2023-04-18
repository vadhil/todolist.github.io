import './App.css';
import { useState } from 'react';
// import '../node_modules/bootstrap/dist/css'

function App() {

  let [value, setValue] = useState(0);
  let [lists, setLists] = useState([]);
  let [counter, setCounter] = useState(1);
  let [done, setDone] = useState(false)
  // let [delete, setDelete] = useState()

  const addValue = (event) => setValue(event.target.value);
  
  const addToList = () => {
    const newList = {
      id: counter,
      name: value,
      complete: false
    }
    setLists([...lists, newList]);
    setCounter(counter + 1);
  }
  const handleDelete = (id) => {
      const newLists = lists.filter((list) => list.id !== id)
      setLists(newLists)
  } 
  const handleComplete = (dataObj) => {
      const newLists = lists.map((list) => {
        if (list === dataObj) {
          dataObj.complete = !dataObj.complete;
        }
        return list
        })
        return setLists(newLists)
      }
      
  const handleComplet = (liste) => {
        const newLists = lists.map((list) => {
          if (list === liste) {
            list.complete = true;
          }
          return list;
        });
        setLists(newLists);
      };
          

  const handleDone = (id) => {
      const newLists = lists.map((list) => list.id !== id)
      setLists(newLists)
  } 
  
  return (
    <div className="App">
      <h1>to do list</h1>
      <div>
        <div className="form">
          <input onChange={addValue} type="text" />
          <button onClick={addToList}>submit</button>
        </div>
        <div className="lists">
          {lists.map((list) => {
            return (
            <div>
              <h3 className={list.complete ? "strike": "neutral"}>{lists.indexOf(list)+1 + ". "}{list.name}</h3>
              <button onClick={() => handleDelete(list.id)}>Delete</button>
              <button onClick={() => handleComplete(list)}>Complete</button>
            </div>)
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
