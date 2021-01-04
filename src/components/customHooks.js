import  { useState, useEffect } from 'react';
import axios from 'axios'

export const useResources = (resourcetype)=>{

   
    const [resource, setResource] = useState([])
    const fetchResources = async(resourcetype)=>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourcetype}`)
        setResource(response.data)
}
    
    useEffect( ()=>{
        fetchResources(resourcetype)
    }
    , [resourcetype])

    return resource
}