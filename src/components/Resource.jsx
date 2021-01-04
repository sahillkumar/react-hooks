import React from 'react';
import { useResources } from "./customHooks"

export default function Resource({resourcetype}) {

    const resource = useResources(resourcetype)

    return (
        <ul>
            {
                resource.map(item=>(
                    <li key={item.id}>{item.title}</li>
                ))
            }
        </ul>
    )
}
