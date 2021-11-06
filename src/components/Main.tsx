import { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { v4 as uuidv4 } from 'uuid';

// Components
import NotesList from "./NotesList";

export default function Main() {
    const [notes, setNotes] = useState([{
        id: uuidv4(),
        title: 'Create your own note!',
        description: 'Title is needed, description is optional :D'
    }])

    /*
    useEffect(() => {
        const sectionTasks = document.getElementById('section-tasks') as HTMLElement;
        ScrollReveal().reveal(sectionTasks, { delay: 300});
    }, [])
    */

    const addNote = (id: string, title: string, description: string) => {
        const newNote = {
            id: id,
            title: title,
            description: description
        }

        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    }

    return (
        <section id="section-tasks" className="h-screen flex flex-col items-center relative">
            <h3 className="font-gilroy-medium text-3xl text-primary mb-4 border-b border-primary">Your notes</h3>
            <NotesList notes={notes} handleAddNote={addNote} />
        </section>
    )
}