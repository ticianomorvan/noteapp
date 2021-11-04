import { useState } from "react";

const AddNote = () => {
    const [noteText, setNoteText] = useState('');
    const [noteTitle, setNoteTitle] = useState('');

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        event.preventDefault();
        setNoteText(event.target.value);
    }

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setNoteTitle(event.target.value);
    }

    const handleSaveClick = () => {
        
    }

    return (
        <article className="font-gilroy-regular flex flex-col justify-center items-center bg-secondary border-2 rounded-lg w-72 shadow-md p-2">
            <input type="text" value={noteTitle} onChange={handleTitleChange} placeholder="An interesting title..." className="rounded-md p-2 m-2 outline-none border-2 border-primary" />
            <textarea
                className="resize-none rounded-lg p-2 outline-none border-2 border-primary"
                rows={8}
                cols={24}
                placeholder="Type your new note!"
                value={noteText}
                onChange={handleTextChange}
            />
            <span className="m-1 flex justify-around items-center w-full">
                <small className="text-white">200 remaining</small>
                <button onClick={handleSaveClick} className="bg-white p-1 rounded-md transition duration-150 hover:bg-gray-200">Save!</button>
            </span>
        </article>
    )
}

export default AddNote;