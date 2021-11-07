import React from 'react';

// Components
import AddNote from './AddNote';
import Note from './Note';

interface INotesList {
    notes: Array<{id: string, title: string, description: string}>;
    handleAddNote: (id: string, title: string, description: string) => void;
    handleDeleteNote: (id: string) => void;
}

const NotesList: React.FC<INotesList> = (
    {notes, handleAddNote, handleDeleteNote}
) => {
  return (
    <section className="grid lg:grid-cols-4 gap-4">
      {notes.map((note: any) => {
        return <Note
          key={note.id}
          id={note.id}
          title={note.title}
          description={note.description}
          handleDeleteNote={handleDeleteNote}
        />;
      })}
      <AddNote handleAddNote={handleAddNote} />
    </section>
  );
};

export default NotesList;
