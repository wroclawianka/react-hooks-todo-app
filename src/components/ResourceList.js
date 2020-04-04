import React, {useState, useEffect} from "react";
import axios from "axios";

const ResourceList = ({resource}) => {
    const [resources, setResources] = useState([]);

    const fetchResource = async (resource) => {
        return await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    };

    useEffect(() => {
        fetchResource(resource).then(res => setResources(res.data));
    }, [resource]);
    /* why needed? thx to that useEffect will not fetch
     resource if value of resource did not change*/

    return (
        <ul>
            {resources.map(record => (
                <li key={record.id}>{record.title}</li>
            ))}
        </ul>
    )
};

export default ResourceList;