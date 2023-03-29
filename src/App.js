import { useReducer, useState } from 'react';
import reducer from './reducer/reducer';
import './App.css';

function App() {
  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0,
  });
  const [text, setText] = useState('');
  const onSubmit = (e) =>{
    e.preventDefault()
    // console.log('form submit');
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
      <p>Input text : {text}</p>
    </div>
  );
}

export default App;
