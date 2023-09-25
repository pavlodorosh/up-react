import React, { useState, useEffect } from 'react';

export default function HookUseEffect2(){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/hadley/orgs')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

    return(
        <>
        <div>
            <h2>Data Fetching</h2>
            <ul>
                {data.map(item => <li key={item.id}>{item.login}</li>)}
            </ul>
        </div>
        </>
    );
}