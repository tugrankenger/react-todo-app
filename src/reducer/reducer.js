const reducer = (state, action) => {
  switch(action.type){
    case 'ADD_TODO': return {
      todos: [...state.todos, {text:action.payload, completed: false}],
    }
    case 'TOGGLE_TODO': return{
      todos: state.todos.map((item,i)=>{
        return i === action.payload ? {...item, completed: !item.completed}: item
      })
    }
    case 'DELETE_TODO': return{
      todos: state.todos.filter((item,i)=>{
        return i !== action.payload
      })
    }
    default: return state
  }
};

export default reducer;
