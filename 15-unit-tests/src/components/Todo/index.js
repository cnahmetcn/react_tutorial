import React, {useState} from 'react'

const defaultItems = [
    {
        name: 'item 1',
    },
    {
        name: 'item 2',
    },
    {
        name: 'item 3',
    },
]

const Todo = () => {
    const [text, setText] = useState('');
    const [items, setItems] = useState(defaultItems);

    const addItem = () => {
        setItems(prev => [...prev, {name: text}])
        setText('')
    }
  return (
    <div>
        <label>
            Text
            <input value={text} onChange={(e) => setText(e.target.value)} />
        </label>
        <button onClick={addItem}>Add</button>

        <br></br>
        {
            items.map((item, index) => (
                <div key={index}>{item.name}</div>
            ))
        }
    </div>
  )
}

export default Todo