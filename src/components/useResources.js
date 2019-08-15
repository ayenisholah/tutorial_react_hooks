import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resourceName) => {
  const [ resources, setresources ] = useState([]);
  const fetchResources = async (resourceName) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceName}`);
    setresources(response.data);
  }

  useEffect(() => {
    fetchResources(resourceName)
  }, [resourceName])

  return resources;
}

export default useResources;