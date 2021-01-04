import React from 'react'
import { useResources } from "./customHooks"


export default function Users() {
    const users = useResources('users')
    return (
        <ul>
            {
                users.map(item=>(
                    <li key={item.id}>{item.name}</li>
                ))
            }
        </ul>
    )
}
