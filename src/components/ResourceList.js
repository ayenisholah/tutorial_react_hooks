import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resourceName }) => {

  const [ resources, setresources ] = useState([]);
  const fetchResources = async (resourceName) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceName}`);
    setresources(response.data);
  }

  useEffect(() => {
    fetchResources(resourceName)
  }, [resourceName])

  return (
    <ul>
      {resources.map(resource => (
        <li key={resource.id}>{resource.title}</li>
      ))}
    </ul>
  )
}

export default ResourceList;
