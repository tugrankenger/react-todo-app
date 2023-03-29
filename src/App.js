import { useReducer, useState } from 'react';
import reducer from './reducer/reducer';
import './App.css';

function App() {
  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0,
  });
  const [text, setText] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_TODO',
      payload: text,
    });
    setText('');
  };
  const toggleTodo = (i) => {
    dispatch({
      type: 'TOGGLE_TODO',
      payload: i,
    });
  };
  const deleteTodo = (i) =>{
    dispatch({
      type:'DELETE_TODO',
      payload:i
    })
  }
  return (
    <div className='App'>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
      {/* <pre>{JSON.stringify(todos,null,2)}</pre> */}
      {todos.map((item, i) => {
        return (
          <div
            className={`todo-data ${item.completed ? 'border-success' : ''}`}
            key={i}
            onClick={() => toggleTodo(i)}
            onDoubleClick={()=>deleteTodo(i)}
          >
            <pre>
              <strong>item text:</strong> {item.text}
            </pre>
            <pre>
              <strong>item status:</strong>{' '}
              {item.completed ? <span>True</span> : <span>False</span>}
            </pre>
          </div>
        );
      })}
    </div>
  );
}

export default App;
