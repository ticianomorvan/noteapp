import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({ notes, handleAddNote }) => {
    return (
        <section className="grid lg:grid-cols-4 gap-4">
            {notes.map((note: any) => {
                return <Note key={note.title} id={note.id} title={note.title} description={note.description} />
            })}
            <AddNote handleAddNote={handleAddNote} />
        </section>
    )
}

export default NotesList