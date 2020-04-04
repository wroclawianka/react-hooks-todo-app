import React from 'react';
import useResources from "./useResources";

const UserList = () => {
    const resources = useResources('users');

    return (
        <div>
            <p>Our users: </p>
            <ul>
                {resources.map(record => (
                    <li key={record.id}>{record.name}</li>))}
            </ul>
        </div>
    )
};

export default UserList;