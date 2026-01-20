import React, { useState } from 'react'

const ToDoList = () => {

    const [inputvalue, setInputvalue] = useState('');
    const [list, setList] = useState([])

    function addToList() {
        if (inputvalue === '') return
        //This line is the heart of React state updates.
        setList([...list, inputvalue]) // ...list ⚠️ This is called immutability React wants a new copy, not modified old data.
        setInputvalue('')
    }

    function deleteItem(deletePannu) {

        const newList = list.filter((item, i) => i !== deletePannu);

        setList(newList)

    }

    return (
        <div className="todo-container">
            <h1 className="title">Simple To Do List</h1>

            {/* Interview question alert 🚨
They may ask: “What is controlled vs uncontrolled input?”
Controlled = React controls the value (like this) */}

            <div className="input-group">
                <input 
                    className="todo-input"
                    value={inputvalue} 
                    onChange={(e) => setInputvalue(e.target.value)} 
                    placeholder="Add a new task..."
                />
                <button className="add-btn" onClick={addToList}>
                    <span>Add</span>
                </button>
            </div>
            
            <div className="list-container">
                {
                    list.map((e, index) => (
                        <div key={index} className="todo-item">
                            <span className="todo-text">{e}</span> 
                            <button className="delete-btn" onClick={() => deleteItem(index)}>Delete</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ToDoList