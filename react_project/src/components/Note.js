import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import env from '../env.json';

function Note() {
    let {noteURL} = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('d-none');
    const [formClass, setFormClass] = useState('d-none');
    const [errorClass, setErrorClass] = useState('d-none');

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
                        setFormClass('d-none');
                        setLineClass('');
                        setErrorClass('d-none');
                    }
                    else if(!response.result){
                        setFormClass('');
                        setLineClass('d-none');
                        setErrorClass('d-none');
                    }
                })
        }else{
            setFormClass('');
            setLineClass('d-none');
            setErrorClass('d-none');
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
        let note_url = url.replace(env.url,'');
        window.location.href =  window.location.href + '/' + note_url;

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