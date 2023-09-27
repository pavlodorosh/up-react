import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import env from '../env.json';

function Note() {
    let {noteURL} = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('hide');
    const [errorClass, setErrorClass] = useState('hide');

    useEffect(() => {
        if(noteURL !== undefined){
            fetch(env.urlBackend, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({"url":noteURL})
            })
                .then( response => response.json())
                .then( response => {
                    console.log(response);
                    if(response.result){
                        setNoteText(response.note);
                        setFormClass('hide');
                        setLineClass('');
                        setErrorClass('hide');
                    }
                    else if(!response.result){
                        setFormClass('');
                        setLineClass('hide');
                        setErrorClass('hide');
                    }
                })
        }else{
            setFormClass('');
            setLineClass('hide');
            setErrorClass('hide');
        }
    }, [noteURL]);

    function getNote(event){
        event.preventDefault();
        let url = event.target.elements.url.value;
        url = url.trim();
        if ( url === ''){
            alert('URL is empty');
            return false;
        }
        noteURL = url;
        window.location.href = env.url+'/'+url;
    }
    return (
        <div>
            <div className={lineClass}>
                <h4>Note:</h4>
                <div>{noteText}</div>
            </div>
            <div className={errorClass}>
                <p>Error Note not found!!</p>
            </div>
            <div className={formClass}>
                <form action="" onSubmit={getNote}>
                    <label htmlFor="url">Input note</label>
                    <input type="text" name="url" id="url" className="form-control" />
                    <button type="submit" className="btn btn-primary">Search Note</button>
                </form>
            </div>
        </div>
    );
}

export default Note;