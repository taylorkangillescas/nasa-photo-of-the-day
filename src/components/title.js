import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function Title(){
    const [title, setTitle] = useState('');
    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=ucoCfFNCX1T5tB8OwKRwbykw8wGzrbjE7SCxAINo")
        .then(response => {
            console.log(response.data);
            setTitle(response.data.title);
        });
    },[]);
    return(
        <div>
            <h1>{title}</h1>
        </div>
    )
}

export default Title