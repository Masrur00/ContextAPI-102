import { useEffect, useState } from 'react';

export const Todos = () => {
  const [todos, setTodo] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(
      'https://vitejs-vite-qv1xjj--8080.local.webcontainer.io/posts'
    ).then((d) => d.json());
    setTodo(data);
    
    
  };
  return (
    <div>
      <input type="text" placeholder="" />
      <button>Add Todos</button>
      <ul>
      {todos.map(t => 
      
        <li key={t.id}>{t.title}</li>
      
      )}
      </ul>
    </div>
  );
};
