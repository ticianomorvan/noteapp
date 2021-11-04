import AddNote from "./AddNote";
import Note from "./Note";
// import { INote } from "./Note";

const NotesList = ({ notes } ) => {
    return (
        <section className="grid lg:grid-cols-4 gap-4">
            {notes.map((note: any) => {
                return <Note id={note.id} title={note.title} description={note.description} />
            })}
            <AddNote />
        </section>
    )
}

export default NotesList