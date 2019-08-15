import React, { useState } from 'react';

import ResourceList from './ResourceList';
import Users from './Users';

const App = () => {

  const [resourceName, setresourceName] = useState('post')

  return (

    // resourceName === currentState resourceName
    // setresourceName === function that changes resourceName
    // useState === function (params === initialState)

    < React.Fragment >
      <button onClick={() => setresourceName('posts')}>Posts</button>
      <button onClick={() => setresourceName('todos')}>Todos</button>
      <Users />
      <ResourceList resourceName={resourceName} />
    </React.Fragment >
  )
}


export default App;