import React, { useState } from 'react'

function App() {
  const [item, setItems] = useState("");
  const [list, setList] = useState([]);
  const addInList = () => {
    setList((oldlist) => {
      return [...oldlist, item]
    })
  }
  const deleteItem = (e) => {
    setList((oldlist) => {
      return oldlist.filter((elem, index) => {
        return index !== e.target.id;
      })
    })
  }
  console.log(list)
  return (
    <div className='app'>
      <div className="center__div">
        <h2>ToDo app</h2>
        <input type="text" value={item} placeholder='enter Text' onChange={(e) => setItems(e.target.value)} />
        <button onClick={() => addInList()}>+</button>
      </div>
      <div className="show__list">
        {
          list.map((data, index) => (
            <div key={index} id={index} onClick={(e) => { deleteItem(e) }}>X <span>{data}</span></div>
          ))
        }
      </div>
    </div >
  )
}

export default App