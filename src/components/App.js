import React, { useState } from 'react';
import '../App.css';
import Resource from './Resource';
import Users from './Users';

function App() {

  const [resourcetype,setResourcetype] = useState('posts')

  return (
    <div className="App" >
      <h3>Users</h3>
      <Users/>
      <button onClick={()=>{ setResourcetype('posts')}} style={{ margin:10}}>posts</button>
      <button onClick={()=>{ setResourcetype('todos')}}>todos</button>
      <h3>{resourcetype}</h3>
      <Resource resourcetype={resourcetype}/>
    </div>
  );
}

export default App;
