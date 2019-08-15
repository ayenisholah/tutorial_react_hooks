import React, { useState, useEffect } from 'react';

import ResourceList from './ResourceList';


const App = () => {

  const [resourceName, setresourceName] = useState('post')

  return (

    // resourceName === currentState resourceName
    // setresourceName === function that changes resourceName
    // useState === function (params === initialState)

    < React.Fragment >
      <button onClick={() => setresourceName('posts')}>Posts</button>
      <button onClick={() => setresourceName('todos')}>Todos</button>
      <ResourceList resourceName={resourceName} />
    </React.Fragment >
  )
}


export default App;