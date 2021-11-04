import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// Components
import NotesList from "./NotesList";

export default function Main() {
    const [notes, setNotes] = useState([
        {
            id: uuidv4(),
            title: 'My first note!',
            description: 'this is my first note'
        },
        {
            id: uuidv4(),
            title: 'My second note!',
            description: 'this is my second note'
        },
        {
            id: uuidv4(),
            title: 'My third note!',
            description: 'this is my third note'
        }
    ]);

    return (
        <section id="section-tasks" className="h-screen flex flex-col items-center relative">
            <h3 className="font-gilroy-medium text-3xl text-primary mb-4 border-b border-primary">Your notes</h3>
            <NotesList notes={notes} />
        </section>
    )
}