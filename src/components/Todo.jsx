import { memo, useState } from 'react';

const TodoItem = memo(function TodoItem({ todo, onToggle }){
  return(
    <li 
      style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  )
});

const TodoList = memo(function TodoList({ todos, onToggle }){
  return(
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  )
});

export default function Todos({ todos, onCreate, onToggle }){
  const [text, setText] = useState('');
  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    onCreate(text);
    setText(''); //input 초기화
  };

  return(
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          placeholder='할 일을 입력하세요.'
          onChange={onChange}
          style={{marginRight: '1rem'}}
        />
        <button type='submit'>등록</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  )
}

