/* VERSION 3.*/
import {useEffect, useState} from "react";
import axios from "axios";

const useResources = (resource) => {
    const [resources, setResources] = useState([]);
    const fetchResource = async (resource) => {
        return await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    };
    useEffect(() => {
        fetchResource(resource).then(res => setResources(res.data));
    }, [resource]);
    return resources;
};

export default useResources;