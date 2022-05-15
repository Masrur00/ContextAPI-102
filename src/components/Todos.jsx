import { useEffect, useState } from 'react';

export const Todos = () => {
  const [todos, setTodo] = useState([]);
  const [text, setText] = useState('');
  const [loading,setLoading ] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
  
    const data = await fetch(
      'https://vitejs-vite-qv1xjj--8080.local.webcontainer.io/users'
    ).then((d) => d.json());
    setTodo(data);   
    setLoading(false);
    
  };


  return (loading)? "Loading..." :(
    <div>
      <input onChange={ (e)=> setText(e.target.value) } type="text" placeholder="enter todo" />
      <button onClick={ ()=> {
          const payload = {
            title:text,
            status:false
         };

         const data =  fetch('https://vitejs-vite-qv1xjj--8080.local.webcontainer.io/users', {
         method: 'POST',
         body: JSON.stringify(payload),
         headers: { 'Content-Type': 'application/json' }
         }).then(()=>{
           getData();
         });
         
         
      }        
      //  axios.post("url", payload);  just one line in axios
      }>Add Todo</button>
      <ul>
      
      {      
      todos.map(t =>       
        <li key={t.id}>{t.title}</li>      
               )
      }
      </ul>
    </div>
  );
};
