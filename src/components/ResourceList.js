import React, {useState, useEffect} from "react";
import axios from "axios";

const fetchResource = async (resource) => {
    return await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
};

const useResources = (resource) => {

};

const ResourceList = ({resource}) => {
    // VERSION 2.
    const resources = useResources(resource);

   /* VERSION 1.
    const [resources, setResources] = useState([]);
    const fetchResource = async (resource) => {
        return await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    };
    useEffect(() => {
        fetchResource(resource).then(res => setResources(res.data));
    }, [resource]);*/

    /* why needed? thx to that useEffect will not fetch
     resource if value of resource did not change
     one tricky case is object, {color: 'red'} and {color: 'red'} are not the same for JS */

    return (
        <ul>
            {resources.map(record => (
                <li key={record.id}>{record.title}</li>
            ))}
        </ul>
    )
};

export default ResourceList;