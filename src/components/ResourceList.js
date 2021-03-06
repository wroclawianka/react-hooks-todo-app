import React  from "react";
// VERSION 3.
import useResources from "./useResources";

/*  VERSION 2.
    const useResources = (resource) => {
    const [resources, setResources] = useState([]);
    const fetchResource = async (resource) => {
        return await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    };
    useEffect(() => {
        fetchResource(resource).then(res => setResources(res.data));
    }, [resource]);
    return resources;
};*/

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
        <div>
            <p>Your {resource}:</p>
            <ul>
                {resources.map(record => (
                    <li key={record.id}>{record.title}</li>
                ))}
            </ul>
        </div>
    )
};

export default ResourceList;